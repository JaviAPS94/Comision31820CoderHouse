import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from './src/graphql/index.js';

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

// Como armar un query y mutation

// query {
//     getPersonas {
//       id
//       nombre
//       edad
//     }
//   }
  
//   mutation {
//     createPersona(datos: { nombre: "Angela", edad: 22 }) {
//       edad
//       nombre
//     }
//   }

app.listen(3000);