const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger-example.json');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
    console.log(`Running on 3000`);
})