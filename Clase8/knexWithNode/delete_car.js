const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

knex('cars').where('price', '<', 20000)
    .del()
    .then(() => console.log("registros eliminados"))
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });