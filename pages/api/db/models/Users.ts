import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import mongoose, { Model, model } from 'mongoose';
import * as sha256 from 'sha256';
import { ILoginParams } from '../../types';
import { USER_LOGIN_TYPES } from '../utils';
import { IUser, IUserDocument, userSchema } from './definitions';
import Logs from './Logs';
import { getBankCustomer } from '../../utils/customer';
import { sendGraphQLRequest } from '../../utils';
import {
  clientPortalCreateCustomer,
  clientPortalCreateCompany
} from '../../graphql/mutations';

const SALT_WORK_FACTOR = 10;

const configId = process.env.REACT_APP_CLIENT_PORTAL_CONFIG_ID;

interface IEditProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
}

type ErxesCustomer = {
  firstName?: string;
  lastName?: string;
  password: string;
  isOwner: boolean;
  email: string;
  customerId: string;
};

export interface IUserModel extends Model<IUserDocument> {
  checkPassword(password: string): void;
  getSecret(): string;
  generateToken(): { token: string; expires: Date };
  createUser(doc: IUser): Promise<IUserDocument>;
  editProfile(_id: string, doc: IEditProfile): Promise<IUserDocument>;
  generatePassword(password: string): Promise<string>;
  comparePassword(password: string, userPassword: string): boolean;
  resetPassword({
    token,
    newPassword
  }: {
    token: string;
    newPassword: string;
  }): Promise<IUserDocument>;
  changePassword({
    _id,
    currentPassword,
    newPassword
  }: {
    _id: string;
    currentPassword: string;
    newPassword: string;
  }): Promise<IUserDocument>;
  forgotPassword(email: string): string;
  createTokens(_user: IUserDocument, secret: string): string[];
  refreshTokens(
    refreshToken: string
  ): { token: string; refreshToken: string; user: IUserDocument };
  login(args: ILoginParams): { token: string; refreshToken: string };
  createOrUpdate(doc: ErxesCustomer);
  findOrCreate(token: string): Promise<IUserDocument>;
  deleteErxesCustomer(_id: string): string;
}

export const loadClass = () => {
  class User {
    public static getSecret() {
      return process.env.JWT_TOKEN_SECRET || '';
    }

    public static generatePassword(password: string) {
      const hashPassword = sha256(password);

      return bcrypt.hash(hashPassword, SALT_WORK_FACTOR);
    }

    public static comparePassword(password: string, userPassword: string) {
      const hashPassword = sha256(password);

      return bcrypt.compare(hashPassword, userPassword);
    }

    public static async generateToken() {
      const buffer = await crypto.randomBytes(20);
      const token = buffer.toString('hex');

      return {
        token,
        expires: Date.now() + 86400000
      };
    }

    public static checkPassword(password: string) {
      if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        throw new Error(
          'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        );
      }
    }

    public static async createUser({ password, email, ...doc }: IUser) {
      // empty string password validation
      if (password === '') {
        throw new Error('Password can not be empty');
      }

      this.checkPassword(password);

      const tEmail = (email || '').toLowerCase().trim();

      const user = await Users.create({
        ...doc,
        email: tEmail,
        // hash password
        password: await this.generatePassword(password)
      });

      const { companyName, firstName, lastName, type } = doc;

      if (type === USER_LOGIN_TYPES.COMPANY) {
        const company: { _id?: string } = await sendGraphQLRequest({
          query: clientPortalCreateCompany,
          name: 'clientPortalCreateCompany',
          variables: {
            configId,
            email: tEmail,
            companyName
          }
        });

        if (company && company._id) {
          await Users.updateOne(
            { _id: user._id },
            { $set: { erxesCompanyId: company._id } }
          );
        }
      } else {
        const customer: { _id?: string } = await sendGraphQLRequest({
          query: clientPortalCreateCustomer,
          name: 'clientPortalCreateCustomer',
          variables: {
            configId,
            email: tEmail,
            firstName,
            lastName
          }
        });

        if (customer && customer._id) {
          await Users.updateOne(
            { _id: user._id },
            { $set: { erxesCustomerId: customer._id } }
          );
        }
      }

      return user._id;
    }

    public static async editProfile(_id: string, { password, ...doc }: IUser) {
      const user = await Users.findOne({ _id }).lean();

      if (!user) {
        throw new Error('User not found');
      }

      // check current password ============
      const valid = await this.comparePassword(password, user.password);

      if (!valid) {
        throw new Error('Incorrect current password');
      }

      const email = doc.email;

      // Checking duplicated email
      const exisitingUser = await Users.findOne({ email }).lean();

      if (exisitingUser) {
        throw new Error('Email duplicated');
      }

      await Users.updateOne({ _id }, { $set: doc });

      return Users.findOne({ _id });
    }

    public static async resetPassword({
      token,
      newPassword
    }: {
      token: string;
      newPassword: string;
    }) {
      const user = await Users.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {
          $gt: Date.now()
        }
      });

      if (!user) {
        throw new Error('Password reset token is invalid or has expired.');
      }

      if (!newPassword) {
        throw new Error('Password is required.');
      }

      this.checkPassword(newPassword);

      // set new password
      await Users.findByIdAndUpdate(
        { _id: user._id },
        {
          password: await this.generatePassword(newPassword),
          resetPasswordToken: undefined,
          resetPasswordExpires: undefined
        }
      );

      return Users.findOne({ _id: user._id });
    }

    public static async changePassword({
      _id,
      currentPassword,
      newPassword
    }: {
      _id: string;
      currentPassword: string;
      newPassword: string;
    }) {
      // Password can not be empty string
      if (newPassword === '') {
        throw new Error('Password can not be empty');
      }

      this.checkPassword(newPassword);

      const user = await Users.findOne({ _id }).lean();

      if (!user) {
        throw new Error('User not found');
      }

      // check current password ============
      const valid = await this.comparePassword(currentPassword, user.password);

      if (!valid) {
        throw new Error('Incorrect current password');
      }

      // set new password
      await Users.findByIdAndUpdate(
        { _id: user._id },
        {
          password: await this.generatePassword(newPassword)
        }
      );

      return Users.findOne({ _id: user._id });
    }

    public static async forgotPassword(email: string) {
      const user = await Users.findOne({ email });

      if (!user) {
        throw new Error('Invalid email');
      }

      // create the random token
      const buffer = await crypto.randomBytes(20);
      const token = buffer.toString('hex');

      // save token & expiration date
      await Users.findByIdAndUpdate(
        { _id: user._id },
        {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 86400000
        }
      );

      return token;
    }

    public static async createTokens(_user: IUserDocument, secret: string) {
      const user = {
        _id: _user._id,
        email: _user.email,
        firstName: _user.firstName,
        lastName: _user.lastName
      };

      const createToken = await jwt.sign({ user }, secret, { expiresIn: '1d' });

      const createRefreshToken = await jwt.sign({ user }, secret, {
        expiresIn: '7d'
      });

      return [createToken, createRefreshToken];
    }

    public static async refreshTokens(refreshToken: string) {
      let _id = '';

      try {
        // validate refresh token
        const { user } = jwt.verify(refreshToken, this.getSecret());

        _id = user._id;
        // if refresh token is expired then force to login
      } catch (e) {
        return {};
      }

      const dbUsers = await Users.findOne({ _id });

      if (!dbUsers) {
        throw new Error('User not found');
      }

      // recreate tokens
      const [newToken, newRefreshToken] = await this.createTokens(
        dbUsers,
        this.getSecret()
      );

      return {
        token: newToken,
        refreshToken: newRefreshToken,
        user: dbUsers
      };
    }

    public static async login({
      type,
      email,
      password,
      description
    }: ILoginParams) {
      const user = await Users.findOne({
        email: { $regex: new RegExp(`^${email}$`, 'i') },
        type: type || { $ne: USER_LOGIN_TYPES.COMPANY }
      });

      if (!user || !user.password) {
        throw new Error('Invalid login');
      }

      const valid = await this.comparePassword(password, user.password);

      if (!valid) {
        // bad password
        throw new Error('Invalid login');
      }

      // create tokens
      const [token, refreshToken] = await this.createTokens(
        user,
        this.getSecret()
      );

      await Logs.createLog({
        type: 'user',
        typeId: user._id,
        text: 'login',
        description
      });

      return {
        token,
        refreshToken
      };
    }

    public static async findOrCreate(golomtToken: string) {
      const setErxesCustomer = async (user: {
        _id: string;
        erxesCustomerId?: string;
        email?: string;
        firstName?: string;
        lastName?: string;
        individualId?: string;
      }) => {
        if (user && !user.erxesCustomerId) {
          const erxesCustomer: { _id?: string } = await sendGraphQLRequest({
            query: clientPortalCreateCustomer,
            name: 'clientPortalCreateCustomer',
            variables: {
              configId,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              code: user.individualId
            }
          });

          if (erxesCustomer && erxesCustomer._id) {
            await Users.updateOne(
              { _id: user._id },
              { $set: { erxesCustomerId: erxesCustomer._id } }
            );
          }
        }
      };

      const customer = await Users.findOne({ golomtToken });

      try {
        if (customer) {
          await setErxesCustomer(customer);

          return customer;
        }

        const bankCustomer: any = await getBankCustomer(golomtToken);

        const oldCustomer = await Users.findOne({
          registrationNumber: bankCustomer.registrationNumber
        });

        if (oldCustomer) {
          await Users.updateOne(
            { _id: oldCustomer._id },
            { $set: { golomtToken } }
          );

          await setErxesCustomer(oldCustomer);

          return oldCustomer;
        }

        const user = await Users.create(bankCustomer);

        await setErxesCustomer(user);

        return user;
      } catch (e) {
        throw new Error(e.message);
      }
    }

    // Erxes customer
    public static async deleteErxesCustomer(_id: string) {
      return Users.deleteOne({ customerId: _id });
    }

    public static async createOrUpdate({
      password,
      isOwner,
      firstName,
      lastName,
      email,
      customerId
    }: ErxesCustomer) {
      // empty string password validation
      if (password === '') {
        throw new Error('Password can not be empty');
      }

      this.checkPassword(password);

      const oldUser = await Users.findOne({ customerId });

      const doc = {
        firstName,
        lastName,
        email,
        isOwner,
        customerId,
        // hash password
        password: await this.generatePassword(password)
      };

      const user = oldUser
        ? await Users.updateOne({ _id: oldUser._id }, { $set: doc })
        : await Users.create(doc);

      return user._id;
    }
  }

  userSchema.loadClass(User);

  return userSchema;
};

loadClass();

// tslint:disable-next-line
delete mongoose.connection.models['users'];

// tslint:disable-next-line
const Users = model<IUserDocument, IUserModel>('users', userSchema);

export default Users;
