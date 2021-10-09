
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import Authorization from './utils/Auth';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';

const server = new ApolloServer({
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    schema,
    playground: true,
    introspection: true,
    tracing: true,
    path: '/',
    context: async ({ req }) => Authorization(req)
})


export default server;