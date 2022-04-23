const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

knex.from('cars').select('name', 'price')
    .where('price', '=', 20000)
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });