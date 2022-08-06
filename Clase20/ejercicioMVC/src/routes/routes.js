import { Router } from 'express';
import { postPersonController, getPersonController } from '../controllers/personController.js';

const router = new Router();

router.post('/html-onwire', postPersonController);
router.get('/html-onwire', getPersonController);

export default router;
