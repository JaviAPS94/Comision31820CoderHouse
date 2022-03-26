const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

const app = express();

app.post('/upload', upload.single('miArchivo'), (req, res, next) => {
    const file = req.file;
    res.send(`Archivo ${file.originalname} subido exitosamente`);
})

app.post('/upload-multiple', upload.array('miArchivos', 5), (req, res, next) => {
    const files = req.files;
    res.send(`Archivo ${files} subido exitosamente`);
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
