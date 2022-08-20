const router = require('express').Router();

router.get('/products/:id', (req, res) => {
    // #swagger.summary = 'Obtener productos'
    // #swagger.description = 'Este servicio me permite obtener los productos de la bdd'
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'Product id',
        required: true,
        type: 'integer'
    } */
    /* #swagger.parameters['name'] = {
        in: 'query',
        description: 'Name filter',
        required: false,
        type: 'string'
    } */
    /* #swagger.responses[200] = {
        description: 'Productos obtenidos exitosamente',
        schema: { $ref: '#/definitions/Products' }
    } */
    res.send('test');
});

router.post('/products', (req, res) => {
    /* #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Cuerpo para guardar un producto',
        schema: { $ref: '#/definitions/Product' }
    }*/
    // #swagger.responses[500] = { description: 'Internal server error' }
    res.send('test');
});

module.exports = router;