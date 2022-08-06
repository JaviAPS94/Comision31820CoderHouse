import CustomError from '../errores/CustomError.js';

class ProductosDao {
  async getAll() {
    return [
      {
        id: 1,
        nombre: 'test1',
        precio: 14.50,
      },
      {
        id: 2,
        nombre: 'test2',
        precio: 13.50,
      },
      {
        id: 3,
        nombre: 'test3',
        precio: 12.50,
      },
      {
        id: 4,
        nombre: 'test4',
        precio: 11.50,
      },
      {
        id: 5,
        nombre: 'test5',
        precio: 10.50,
      },
    ];
  }

  async getById(id) {
    return {
      id,
      nombre: 'test',
      precio: 14.50,
    };
  }

  async add(prodNuevo) {
    throw new CustomError(500, 'falta implementar add');
  }

  async deleteById() {
    throw new CustomError(500, 'falta implementar deleteById');
  }

  async deleteAll() {
    throw new CustomError(500, 'falta implementar deleteAll');
  }

  async updateById(id, nuevoProd) {
    throw new CustomError(500, 'falta implementar updateById');
  }
}

export default ProductosDao;
