const express = require('express')

const personas = [];

const app = express()

app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { personas })
})

app.post('/personas', (req, res) => {
    personas.push(req.body);
    res.redirect('/')
})

app.listen(8080)