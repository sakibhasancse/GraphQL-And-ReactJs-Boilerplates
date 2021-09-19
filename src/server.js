import { GraphQLServer } from 'graphql-yoga';
import data from './data'
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema/typeDefs.graphql';


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        data
    },
    formatErrors: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return new Error('Internal server error');
        }
        // Otherwise return the original error. The error can also
        // be manipulated in other ways, as long as it's returned.
        return err;
    }
});

const port = process.env.PORT || 3000;
server.start(({ port }), function () {
    console.log(`Server listening on port ${port}`);
});