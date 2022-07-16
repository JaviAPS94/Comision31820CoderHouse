import { obtenerDatos, crearDato } from '../services/datos.js';

async function getDatosController(req, res) {
    const datos = await obtenerDatos();
    res.json(datos);
}

async function postDataController(req, res) {
    const dato = req.body;
    await crearDato(dato);
    res.status(201).json(dato);
}

export {
    getDatosController,
    postDataController
}