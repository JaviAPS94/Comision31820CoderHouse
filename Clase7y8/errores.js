const express = require('express');
const port = 8080;
const app = express();

app.get('/users', (req, res, next) => {
    try {
        throw new Error('There was an error getting the users');
    } catch (err) {
        console.log(err);
        next(err);
    }
});

app.put('/books', (req, res, next) => {
    try {

        throw new Error('There was an error getting the books');

    } catch (err) {
        console.log(err);
        next(err);
    }
});

app.post('/books', (req, res, next) => {
    try {
        throw new Error('There was an error getting the books');
    } catch (err) {
        console.log(err);
        next(err);
    }
});

app.delete('/books', (req, res, next) => {
    try {
        throw new Error('There was an error getting the books');
    } catch (err) {
        console.log(err);
        next(err);
    }
});

function handleErrors(err, req, res, next) {
    console.log(err);
    res.status(500).send('An internal server error occurred');
};

app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});