import { Router } from 'express';
import plantController from './controllers/plantController.js';

const router = Router();

router.use('/plants', plantController);

export default router;