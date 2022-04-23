const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

knex.schema.table('cars', table => {
    table.integer('price').alter()
}).then(() => console.log("Tabla actualizada"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    })