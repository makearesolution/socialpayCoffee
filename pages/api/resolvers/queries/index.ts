import user from './user';
import logs from './logs';
import erxes from './erxesQueries';

export default {
  ...user,
  ...logs,
  ...erxes
};
