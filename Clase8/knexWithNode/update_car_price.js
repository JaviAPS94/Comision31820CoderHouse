const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);


knex('cars').where('price', 50000)
    .update({ price: 55000 })
    .then(() => console.log("registro actualizado"))
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });