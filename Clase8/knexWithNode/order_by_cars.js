const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

knex.from('cars').select('*')
    .orderBy('price', 'asc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });