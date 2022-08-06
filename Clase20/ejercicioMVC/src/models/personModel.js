const personas = [];

async function guardar(persona) {
  personas.push(persona);

  return persona;
}

async function getAll() {
  return personas;
}

export {
  getAll,
  guardar,
};
