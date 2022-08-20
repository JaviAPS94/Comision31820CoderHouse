import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from 'graphql';

const PersonType = new GraphQLObjectType({
    name: "Person",
    description: "Person Type",
    fields: () => ({
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        apellido: { type: GraphQLString },
        dni: { type: GraphQLString },
        edad: { type: GraphQLInt }
    })
});

export { PersonType };