const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080

app.post('/api/message', (req, res) => {
    const message = req.body;
    res.json({ body: message });
})

app.put('/api/message/:id', (req, res) => {
    const id = req.params.id;
    const message = req.body;
    res.json({ id: id, body: message });
})

app.delete('/api/message/:id', (req, res) => {
    const id = req.params.id;
    res.json({ id: id });
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))