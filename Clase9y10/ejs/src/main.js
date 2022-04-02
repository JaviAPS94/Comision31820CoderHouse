const express = require('express')

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const pets = [
        { name: 'Samy', organization: 'DigitalOcean', birth_year: 2012 },
        { name: 'Tux', organization: 'Linux', birth_year: 1996 },
        { name: 'Moby', organization: 'Docker', birth_year: 2013 }
    ];

    const tagline = 'Ningún concepto de programación es chevere sin una mascota';

    res.render('pages/index', {
        pets,
        tagline
    })
})


app.listen(8080);