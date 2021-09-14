import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
    type Users {
        id: ID!,
        name: String!,
        email: String!,
        phone: String!
    }

    type Posts {
        id: ID!,
        title: String!,
        description: String!,
    }
    type Query {
        Posts(title: String, description: String): Posts!
        Users: Users! 
    }

`


const resolvers = {
    Query: {
        Users: () => {

            return { id: 'asdasdas', "name": "sada", "email": "asd", "phone": "asdas" }
        },
        Posts: (_, { title, description }) => {
            return { id: 'asdasdas', title, description }
        }
    }
}

const server = new GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
const port = 3000;
server.start(({ port }), function () {
    console.log('server listening on port 3000');
});