const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);


knex('cars').where({ id: 2})
    .update({ name: 'name updated' })
    .then(() => console.log("registro actualizado"))
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });