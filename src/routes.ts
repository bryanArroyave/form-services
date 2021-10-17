import { Request, Response, Router } from 'express';
import FormRoute from './useCases/form/routes';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => res.json({ msg: 'ok' }));
router.use('/form', FormRoute);

export default router;
