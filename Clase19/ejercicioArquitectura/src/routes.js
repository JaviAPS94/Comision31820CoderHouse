import { Router } from 'express';
import {
    getSumaController,
    getRestaController,
    getMultiplicacionController,
    getDivisionController,
    getOperacionesController
} from './controllers/operaciones.js';
import auth from './middleware/auth.js';

const routerOperaciones = new Router();

routerOperaciones.get('/suma', getSumaController);
routerOperaciones.get('/resta', getRestaController);
routerOperaciones.get('/multiplicacion', getMultiplicacionController);
routerOperaciones.get('/division', getDivisionController);
routerOperaciones.get('/', auth, getOperacionesController);

export default routerOperaciones;