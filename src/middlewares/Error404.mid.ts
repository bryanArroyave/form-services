import { NextFunction, Request, Response } from 'express';

const handle = (req: Request, res: Response, next: NextFunction) => {
  if (req.url.includes('favicon.ico')) next();
  const error = { message: `Ruta ${req.url} No se encuentra registrada` };
  next(error);
};
export default { handle };
