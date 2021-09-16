import Logs from '../../db/models/Logs';

const logQueries = {
  logs(_root, args: { type: string; typeIds: string }) {
    return Logs.find(args).sort({ createdAt: -1 });
  },
};

export default logQueries;
