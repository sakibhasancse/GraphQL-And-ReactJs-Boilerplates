
import { ApolloServer } from 'apollo-server-express';
import { logger } from './utils/logger'
import schema from './schema';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled
} from 'apollo-server-core';

logger.info('apollo server is enabled');

const server = new ApolloServer({
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    schema,
    playground: true,
    introspection: true,
    tracing: true,
    path: '/',
    context: (context) => context,
    formatResponse: (response) => response

})


export default server;