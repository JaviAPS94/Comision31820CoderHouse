import path from 'path';
import { guardar, getAll } from '../models/personModel.js';

const __dirname = path.resolve();

async function postPersonController(req, res, next) {
  await guardar(req.body);
  res.redirect('/html-onwire');
}

async function getPersonController(req, res, next) {
  const personas = await getAll();
  res.render('plantilla-html-onwire', { personas });
}

async function getDataOnWire(req, res, next) {
  res.sendFile(`${__dirname}/src/views/plantilla-data-onwire.html`);
}

async function postDataOnWire(req, res, next) {
  const persona = await guardar(req.body);
  res.json(persona);
}

async function getDataJson(req, res, next) {
  const personas = await getAll();
  res.json({ personas });
}

export {
  postPersonController,
  getPersonController,
  getDataOnWire,
  postDataOnWire,
  getDataJson,
};
