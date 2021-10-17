import TimeHelper from '../helpers/Time.helper';
import { NextFunction, Request, Response } from 'express';

const handle = (req: Request | any, res: Response, next: NextFunction) => {
  const start = new Date();
  next();
  const end = new Date();
  const time = TimeHelper.intervalDuration(start, end);
  req.time = time;

  // TODO: Guardar
};

export default { handle };
