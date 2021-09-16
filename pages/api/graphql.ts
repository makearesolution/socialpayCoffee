import { ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { init } from './db/connection';
import cookies from '../../utils/cookies';
import { userMiddleware } from './auth';

init();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res, connection }) => {
    await userMiddleware(req, res);

    let user = req && req.user ? req.user : null;

    if (!req) {
      if (connection && connection.context && connection.context.user) {
        user = connection.context.user;
      }

      return {
        user,
      };
    }

    const requestInfo = {
      secure: req.secure,
      cookies: req.cookies,
    };

    return {
      user,
      res,
      requestInfo,
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export default cookies(handler);
