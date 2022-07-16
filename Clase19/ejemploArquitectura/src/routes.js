import { Router } from 'express';
import { getDatosController, postDataController } from './controllers/datos.js';

const routerDatos = new Router();

routerDatos.get('/', getDatosController);
routerDatos.post('/', postDataController);

export default routerDatos;