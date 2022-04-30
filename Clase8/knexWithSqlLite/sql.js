const knewLib = require('knex');

class ClienteSql {
    constructor(config) {
        this.knex = knewLib(config);
    }

    createTable() {
        return this.knex.schema.dropTableIfExists('articulos')
            .finally(() => {
                return this.knex.schema.createTable('articulos', table => {
                    table.increments('id').primary();
                    table.string('nombre', 50).notNullable();
                    table.string('codigo', 10).notNullable();
                    table.float('precio');
                    table.integer('stock');
                })
            })
    }

    insertArticulos(articulos) {
        return this.knex('articulos').insert(articulos);
    }

    listarArticulos() {
        return this.knex('articulos').select('*');
    }

    borrarArticuloPorId(id) {
        return this.knex.from('articulos').where('id', id).del();
    }

    actualizarStockPorId(stock, id) {
        return this.knex.from('articulos').where('id', id).update({ stock: stock });
    }

    close() {
        this.knex.destroy();
    }
}

module.exports = ClienteSql