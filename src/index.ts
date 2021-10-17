import EnvHelper from './helpers/Env.helper';
import server from './server';

const port = EnvHelper.get('PORT');

(async () => {
  await server.start(port);
})();
