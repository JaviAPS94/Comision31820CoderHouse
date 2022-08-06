import { guardar, getAll } from '../models/personModel.js';

async function postPersonController(req, res, next) {
  await guardar(req.body);
  res.redirect('/html-onwire');
}

async function getPersonController(req, res, next) {
  const personas = await getAll();
  res.render('plantilla-html-onwire', { personas });
}

export {
  postPersonController,
  getPersonController,
};
