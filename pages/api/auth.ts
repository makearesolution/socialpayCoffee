import jwt from 'jsonwebtoken';
import Users from './db/models/Users';

export const userMiddleware = async (req, res) => {
  const token = req.cookies['client-auth-token'];

  if (token) {
    try {
      // verify user token and retrieve stored user information
      const { user } = jwt.verify(token, Users.getSecret());

      // save user in request
      req.user = user;
      req.user.loginToken = token;
    } catch (e) {
      console.log(e.message);
    }
  }
};
