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
const users = [
    { id: 1, name: 'sakib', email: 'sakib@gain.com', phone: '123' },
    { id: 2, name: 'John', email: 'john@gain.com', phone: '123' },
    { id: 3, name: 'mokbul', email: 'mokbul@gain.com', phone: '123' },
    { id: 4, name: 'sa', email: 'mokbul@gain.com', phone: '123' }
]

const posts = [
    { id: 12, title: 'sakib', description: 'sadasdas' },
    { id: 12, title: 'John', description: 'sadasdas' },
    { id: 12, title: 'mokbul', description: 'sadasdas' },
    { id: 12, title: 'sa', description: 'sadasdas' }
]


const resolvers = {
    Query: {
        Users: (_, args) => {
            console.log(args)
            if (!args.query) {
                return users
            }

            return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))

        },
        Posts: (_, args) => {
            if (!args.query) {
                return posts
            }
            return posts.filter(post => {
                const isTitleMatch = post.name.toLowerCase().includes(args.query.toLowerCase());
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
                return isTitleMatch || isBodyMatch;
            })

        }
    }
}

const server = new GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
const port = 3000;
server.start(({ port }), function () {
    console.log('server listening on port 3000');
});