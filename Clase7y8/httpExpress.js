const express = require('express')

const app = express()

const PORT = 8080

app.get('/api/message/:identicador', (req, res) => {
    console.log(req.params.identicador)
    if (Object.entries(req.query).length > 0) {
        res.json({
            result: 'Hola mundo es un get con query params',
            query: req.query
        })
    } else {
        res.json({ msg: 'Hola mundo sin query Params' })
    }
});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))