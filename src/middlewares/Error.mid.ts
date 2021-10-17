import { NextFunction, Request, Response } from 'express';
const handle = (
  err: any,
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const { stack, message, status } = err;
  req.error = { stack, message, status };
  return res.status(err.status || 500).json({
    msg: `Se ha generado un error en el servidor`,
    ticket: req.ticket,
  });
};

export default { handle };
