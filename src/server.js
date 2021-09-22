import { GraphQLServer } from 'graphql-yoga';
import data from './data'
import {Posts,
    Users,
    Query,
    Mutation,
    Comments
} from './graphql/resolvers';
    
const server = new GraphQLServer({
    typeDefs: './src/graphql/schema/typeDefs.graphql',
    resolvers: {
        Posts,
    Users,
    Query,
    Mutation,
    Comments
    },
    introspection: true,
    uploads: false,
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
    },
    playground: {
    endpoint: `http://localhost:3000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

const port = process.env.PORT || 3000;
server.start(({ port }), function () {
    console.log(`Server listening on port ${port}`);
});