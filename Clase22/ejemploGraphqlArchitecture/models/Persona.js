import { buildSchema } from 'graphql';

class Persona {
    constructor(id, { nombre, edad }) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}

const schema = buildSchema(`
    type Persona {
        id: ID!,
        nombre: String,
        edad: Int
    }
    input PersonaInput {
        nombre: String,
        edad: Int
    }
    type Query {
        getPersona(id: ID!): Persona,
        getPersonas(campo: String, valor: String): [Persona],
    }
    type Mutation {
        createPersona(datos: PersonaInput): Persona,
    }
`)

export { Persona, schema }