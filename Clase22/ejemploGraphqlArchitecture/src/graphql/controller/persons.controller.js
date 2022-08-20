import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import PersonasDaoMem from '../../dao/PersonasDaoMem.js';
import { PersonType } from '../types/Persons.js';

const personasDaoMem = new PersonasDaoMem();

const getPersons = {
    type: new GraphQLList(PersonType),
    description: 'obtener personas',
    resolve: async() => {
        const personas = personasDaoMem.getAll();
        return personas;
    }
};

const personById = {
    type: PersonType,
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (_, { id }) => {
        const person = personasDaoMem.getById(id)
        console.log(person);
        return person
    }
};

const putPerson = {
    type: PersonType,
    args: {
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        apellido: { type: GraphQLString },
        dni: { type: GraphQLString },
        edad: { type: GraphQLInt }
    },
    resolve: async (_, { id, nombre, apellido, dni, edad }) => {
        const result = personasDaoMem.updateById(
            id,
            {
                nombre,
                apellido,
                dni,
                edad
            }
        )
        return result
    }
}

const delPerson = {
    type: PersonType,
    args: {
        id: { type: GraphQLID }
    },
    resolve: async (_, { id }) => {
        const deleted = personasDaoMem.deleteById(id)
        return deleted;
    }
}

const postPerson = {
    type: PersonType,
    args: {
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        apellido: { type: new GraphQLNonNull(GraphQLString) },
        dni: { type: new GraphQLNonNull(GraphQLString) },
        edad: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: async(_, { nombre, apellido, dni, edad }) => {
        const added = personasDaoMem.save({
            nombre,
            apellido,
            dni,
            edad
        });
        return added;
    }
}

const PersonsController = {
    mutations: {
        postPerson,
        putPerson,
        delPerson
    },
    queries: {
        getPersons,
        personById
    }
}

export { PersonsController }