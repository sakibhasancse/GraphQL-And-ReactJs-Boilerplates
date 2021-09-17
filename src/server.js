import { GraphQLServer } from 'graphql-yoga';
import { v4 } from 'uuid';

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

const comments = [
    { id: 12, author: 2, postId: 12, text: 'Hello, world commnt' },
    { id: 13, author: 1, postId: 15, text: 'Hello, world commnt' },
    { id: 14, author: 3, postId: 13, text: 'Hello, world commnt' },
    { id: 11, author: 4, postId: 14, text: 'first, world commnt' },
    { id: 16, author: 4, postId: 14, text: 'second, world commnt' },
    { id: 15, author: 4, postId: 14, text: 'Hello, world commnt' }
]


const typeDefs = `
    type Users {
        id: ID!,
        name: String!,
        email: String!,
        phone: String!,
        post: [Posts!]!
        comments: [Comments!]!
    }
    type Comments{
        id: ID!,
        text: String!,
        postId: Posts!,
        author: Users!,
    }
    type Posts {
        id: ID!,
        title: String!,
        description: String!,
        published: Boolean!,
        author: Users!,
        comments: [Comments!]!
    }

    type Mutation {
        createUser(name: String!, email: String!, phone: String!): Users!
        createPost(title: String!, description: String!, author: ID!, published: Boolean!): Posts!
        createComment(text: String!, author: ID!, postId: ID!): Comments!
    }
    type Query {
        post(query: String): [Posts!]!
        user(query: String): [Users!]!
        Comments(query: String): [Comments!]!
    }

`

const resolvers = {
    Query: {
        //return users only
        user: (_, args) => {
            console.log(args)
            if (!args.query) {
                return users
            }

            return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()))

        },
        //return posts only
        post: (_, args) => {
            if (!args.query) {
                return posts
            }
            return posts.filter(post => {
                const isTitleMatch = post.name.toLowerCase().includes(args.query.toLowerCase());
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
                return isTitleMatch || isBodyMatch;
            })

        },
        //return commnets only
        Comments: (parent, args) => {
            if (!args.query) {
                return comments
            }
        }
    },
    Mutation: {
        // create a new Users
        createUser: (parent, args) => {
            const { name, email, phone } = args;
            if (name && email && phone) {
                const isUser = users.some(user => user.email === email);
                if (isUser) throw new Error(`User ${email} already exists`);
                const newUser = { id: v4(), name, email, phone };
                users.push(newUser);
                return newUser

            } else {
                throw new Error('All field are must ')
            }
        },
        // create a new Posts
        createPost: (parent, args) => {
            const { title, description, author, published } = args;
            const isUser = users.some(user => user.id === author);
            if (!isUser) throw new Error(`User not found with id ${author}`);
            const newPost = { id: v4(), title, description, author, published };
            posts.push(newPost);
            return newPost;
        },
        // create a new Comment
        createComment: (parent, args) => {
            const { text, postId, author } = args;
            const isUser = users.some(user => user.id === author);
            const isPost = posts.some(post => post.id === postId && post.published === true);
            console.log({ isUser, isPost })
            if (!isUser || !isPost) {
                throw new Error(`User and post must be specified`);
            }
            const newComment = { id: v4(), text: text, postId, author };
            comments.push(newComment);
            return newComment;
        }
    },
    Posts: {
        //post  with author and comments
        author(parent, args) {
            return users.find((user) => {
                return user.id === parent.author;
            })

        },
        comments(parent, args) {
            return comments.filter((comment) => {
                return comment.postId === parent.id;
            })
        }

    },
    //comment with author and posts
    Comments: {
        author(parent, args) {
            return users.find((user) => {
                return user.id === parent.author;
            })
        },
        postId(parent, args) {
            return posts.find((post) => {
                return post.id === parent.postId;
            })
        }
    },
    Users: {
        //user with posts and comments
        post(parent, args) {
            return posts.filter((post) => {
                return post.author === parent.id
            })

        },
        comments(parent, args) {
            return comments.filter((comment) => {
                return comment.author === parent.id;
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs, resolvers: resolvers, formatErrors: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return new Error('Internal server error');
        }
        // Otherwise return the original error. The error can also
        // be manipulated in other ways, as long as it's returned.
        return err;
    }
});
const port = 3000;
server.start(({ port }), function () {
    console.log('server listening on port 3000');
});