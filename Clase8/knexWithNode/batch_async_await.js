const { options } = require('./options/mysqlDB');
const knex = require('knex')(options);

const cars = [
    { name: 'Audi', price: 50000 },
    { name: 'Ferrari', price: 60000 },
    { name: 'Mazda', price: 70000 },
    { name: 'Mercedes', price: 80000 }
];

(async() => {
    try {
        await knex('cars').del();
        
        await knex('cars').insert(cars);
        
        let rows = await knex.from('cars').select('*');
        for(row of rows) console.log(`${row['id']} ${row['name']} ${row['price']}`);
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
})()