const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const outputFile = './docs/swagger-example.json';
const endpointsFiles = ['./src/routes/routes.js'];

const data = {
    info: {
        title: 'API Coderhouse'
    },
    servers: [
        { url: 'http://development.com/api', description: 'Development server' },
        { url: 'http://production.com/api', description: 'Production server' },
        { url: 'http://localhost:3000/api', description: 'Local server' },
    ],
    components: {
        schemas: {
            Product: {
                name: 'test',
                price: 123414,
                description: 'product test'
            },
            Products: [
                {
                    id: 1,
                    name: 'test product 1',
                    price: 123414,
                    description: 'product test 1'
                },
                {
                    id: 2,
                    name: 'test product 2',
                    price: 35463456,
                    description: 'product test 2'
                } 
            ] 
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, data);