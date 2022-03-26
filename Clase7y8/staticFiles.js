const express = require('express');

const app = express();

app.use('/files-csv', express.static(__dirname + '/publicCsv'));

app.listen(8080)