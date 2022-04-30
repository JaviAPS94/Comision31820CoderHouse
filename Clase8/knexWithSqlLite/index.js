const ClienteSql = require("./sql");
const options = require("./options/sqlite");

const sql = new ClienteSql(options);

sql.createTable()
    .then(() => {
        const articulos = [
            { nombre: 'Leche', codigo: 'TRY-12', precio: 23.60, stock: 24 },
            { nombre: 'Harina', codigo: 'TRU-12', precio: 12.60, stock: 45 },
            { nombre: 'Fideos', codigo: 'TRJ-12', precio: 7.60, stock: 12 },
            { nombre: 'Crema', codigo: 'TRI-12', precio: 4.60, stock: 8 },
            { nombre: 'Patatas', codigo: 'TRP-12', precio: 1.60, stock: 4 }
        ];
        return sql.insertArticulos(articulos);
    })
    .then(() => {
        return sql.listarArticulos()
    })
    .then(() => {
        return sql.borrarArticuloPorId(3)
    })
    .then(() => {
        return sql.actualizarStockPorId(0, 2)
    })
    .then(() => {
        return sql.listarArticulos()
    })
    .then(articulos => {
        console.table(articulos)
    })
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
        sql.close();
    })