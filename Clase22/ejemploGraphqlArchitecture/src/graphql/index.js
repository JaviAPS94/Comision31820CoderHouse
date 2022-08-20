import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { PersonsController } from "./controller/persons.controller.js";

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {
        ...PersonsController.queries,
    },
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {
        ...PersonsController.mutations,
    },
});

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

export { schema };