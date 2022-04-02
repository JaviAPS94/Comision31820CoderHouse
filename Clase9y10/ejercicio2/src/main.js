const express = require('express');
const { promises: fs } = require('fs');

const app = express();

app.engine('cte', async (filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath)
        const rendered = content.toString().replace('^^titulo$$', '' + options.titulo + '')
            .replace('^^mensaje$$', '' + options.mensaje + '')
            .replace('^^autor$$', '' + options.autor + '')
            .replace('^^version$$', '' + options.version + '')
        return callback(null, rendered);
    } catch (error) {
        return callback(new Error(error));
    }
})

app.set('views', './views')

app.set('view engine', 'cte')

app.get('/', (req, res) => {
    const datos = {
        titulo: 'titulo',
        mensaje: 'mensaje',
        autor: 'autor',
        version: 'version'
    }

    res.render('plantilla1', datos)
})

app.listen(8080)