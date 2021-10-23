import { Request, Response, NextFunction } from 'express';
import FormService from './service';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = await FormService.getAll();
    return res.json({ error: false, payload });
  } catch (error) {
    next(error);
  }
};
const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const payload = FormService.get(id);
    return res.json({ error: false, payload });
  } catch (error) {
    next(error);
  }
};
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = FormService.create();
    return res.json({ error: false, payload });
  } catch (error) {
    next(error);
  }
};

export default { getAll, get, create };
