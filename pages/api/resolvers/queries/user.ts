import Users from '../../db/models/Users';
import { IContext } from '../../types';

const userQueries = {
  userDetail(_root, { _id }: { _id: string }) {
    return Users.findOne({ _id });
  },

  currentUser(_root, _args, { user }: IContext) {
    return user ? Users.findOne({ _id: user._id }) : null;
  },

  async checkCustomer(_root, { token }: { token: string }) {
    return Users.findOrCreate(token);
  }
};

export default userQueries;
