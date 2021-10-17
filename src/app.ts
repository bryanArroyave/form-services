import express from 'express';
import routes from './routes';
import ErrorMiddleware from './middlewares/Error.mid';
import Error404Middleware from './middlewares/Error404.mid';
import TimeMiddleware from './middlewares/Time.mid';
import RegisterRequestMiddleware from './middlewares/RegisterRequest.mid';

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(RegisterRequestMiddleware.handle);
app.use(TimeMiddleware.handle);
// ROUTES
app.use(routes);
// HANDLES
app.use(Error404Middleware.handle);
app.use(ErrorMiddleware.handle);

export default app;
