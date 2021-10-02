import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queryMap from './graphql/Query';
import mutationMap from './graphql/Mutation';


const mutationType = new GraphQLObjectType({
    name: 'mutation',
    fields: () => mutationMap
})

const queryType = new GraphQLObjectType({
    name: 'query',
    fields: () => queryMap
})

const Schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

export default Schema;