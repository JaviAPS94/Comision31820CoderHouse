const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    const params = req.query;
    // { min: 10, max: 20, nivel: 15, titulo:<i></> }
    res.render('nivel', params);
});

app.listen(8080);