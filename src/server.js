import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
    type Users {
        id: ID!,
        name: String!,
        email: String!,
        phone: String!,
        post: [Posts!]!
    }

    type Posts {
        id: ID!,
        title: String!,
        description: String!,
        author: Users!
    }
    type Query {
        post(query: String): [Posts!]!
        user(query: String): [Users!]! 
    }

`
const users = [
    { id: 1, name: 'sakib', email: 'sakib@gain.com', phone: '123', posts: 12 },
    { id: 2, name: 'John', email: 'john@gain.com', phone: '123', posts: 13 },
    { id: 3, name: 'mokbul', email: 'mokbul@gain.com', phone: '123', posts: 15 },
    { id: 4, name: 'sa', email: 'mokbul@gain.com', phone: '123', posts: 14 },

]

const posts = [
    { id: 12, title: 'sakib', description: 'sadasdas', author: 1 },
    { id: 13, title: 'John', description: 'sadasdas', author: 2 },
    { id: 14, title: 'mokbul', description: 'sadasdas', author: 3 },
    { id: 15, title: 'sa', description: 'sadasdas', author: 4 }
]


const resolvers = {
    Query: {
        user: (_, args) => {
            console.log(args)
            if (!args.query) {
                return users
            }

            return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))

        },
        post: (_, args) => {
            if (!args.query) {
                return posts
            }
            return posts.filter(post => {
                const isTitleMatch = post.name.toLowerCase().includes(args.query.toLowerCase());
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
                return isTitleMatch || isBodyMatch;
            })

        }
    },
    Posts: {
        author(parent, args) {
            return users.find((user) => {
                return user.id === parent.author;
            })

        }

    },
    Users: {
        post(parent, args) {
            return posts.filter((post) => {
                return post.author === parent.id
            })

        }
    }
}

const server = new GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
const port = 3000;
server.start(({ port }), function () {
    console.log('server listening on port 3000');
});