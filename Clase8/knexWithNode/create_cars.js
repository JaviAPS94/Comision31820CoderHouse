const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

const cars = [
    { name: 'Test5', price: 50000 },
    { name: 'Test6', price: 50000 },
    { name: 'Test7', price: 50000 },
    { name: 'Test8', price: 50000 }
]

knex('cars').insert(cars)
    .then((data) => {console.log(data)})
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    });