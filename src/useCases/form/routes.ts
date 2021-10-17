import { Router } from 'express';
import formController from './controller';

const router: Router = Router();

router.get('/', formController.getAll.bind(formController));
router.get('/:id', formController.get.bind(formController));
router.post('/', formController.create.bind(formController));

export default router;
