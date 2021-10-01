
import { ApolloServer } from 'apollo-server-express';
import db from './data';
import resolvers from './graphql/resolvers';

const pubsub = new PubSub();
const server = new ApolloServer({
    typeDefs: './src/graphql/schema/typeDefs.graphql',
    resolvers,
    introspection: true,
    uploads: false,
    context: {
        data,
        pubsub
    },
    formatErrors: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return new Error('Internal server error');
        }
        // Otherwise return the original error. The error can also
        // be manipulated in other ways, as long as it's returned.
        return err;
    },
    playground: {
        settings: {
            'editor.theme': 'light'
        }
    }
});

const port = process.env.PORT || 3000;
server.start(({ port }), function () {
    console.log(`Server listening on port ${port}`);
});