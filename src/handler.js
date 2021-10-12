
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
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
    path: '/'

})


export default server;