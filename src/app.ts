const { config, engine } = require('express-edge');
import express from 'express';
import routes from './routes';
import ErrorMiddleware from './middlewares/Error.mid';
import Error404Middleware from './middlewares/Error404.mid';
import TimeMiddleware from './middlewares/Time.mid';
import RegisterRequestMiddleware from './middlewares/RegisterRequest.mid';
import EnvHelper from './helpers/Env.helper';

const app = express();

const build = () => {
  const addMiddlewares = () => {
    app.use(express.json());
    app.use(RegisterRequestMiddleware.handle);
    app.use(TimeMiddleware.handle);
  };

  const configViews = () => {
    app.use(express.json());
    app.use('/public', express.static('src/resources'));
    config({ cache: EnvHelper.get('NODE_ENV') === 'production' });
    app.use(engine);
    app.set('views', 'src/resources/views');
  };

  const addRoutes = () => {
    app.use(routes);
  };

  const addHandles = () => {
    app.use(Error404Middleware.handle);
    app.use(ErrorMiddleware.handle);
  };

  configViews();
  addMiddlewares();
  addRoutes();
  addHandles();
};

build();

export default app;
