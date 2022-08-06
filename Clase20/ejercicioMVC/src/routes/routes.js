import { Router } from 'express';
import { getHora } from '../controllers/horaController.js';
import {
  postPersonController, getPersonController, postDataOnWire, getDataOnWire, getDataJson,
} from '../controllers/personController.js';

const router = new Router();

// html on wire
router.post('/html-onwire', postPersonController);
router.get('/html-onwire', getPersonController);

// data on wire
router.post('/data-onwire', postDataOnWire);
router.get('/data-onwire', getDataOnWire);
router.get('/data-json', getDataJson);

router.get('/datos', getHora);

export default router;
