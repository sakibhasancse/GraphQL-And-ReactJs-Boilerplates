import { GraphQLServer } from 'graphql-yoga';
import { v4 } from 'uuid';

//Demo Data for app
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

    input CreateUserInputType{
        name: String!,
         email: String!,
          phone: String!
    }

    input CreatePostInputType{
        title: String!,
         description: String!,
         author: ID!, published: Boolean!
    }
     input CreateCommentsInputType{
        text: String!, author: ID!, postId: ID!
    }

    type Mutation {
        createUser(createUserInputType: CreateUserInputType): Users!
        deleteUser(id:ID!):Users!
        createPost(createPostInputType:CreatePostInputType): Posts!
        deletePost(id:ID!, author: ID!):Posts!
        createComment(createCommentsInputType:CreateCommentsInputType): Comments!
        deleteComment(id:ID!, author: ID!, postId: ID!):Comments!
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
            const { name, email, phone } = args?.createUserInputType;
            if (name && email && phone) {
                const isUser = users.some(user => user.email === email);
                if (isUser) throw new Error(`User ${email} already exists`);
                const newUser = { id: v4(), ...args.createUserInputType };
                users.push(newUser);
                return newUser

            } else {
                throw new Error('All field are must ')
            }
        },
        //delete user from the database
        deleteUser: (parent, args) => {
            const isUser = users.findIndex(user => user.id === args?.id);
            if (isUser === -1) throw new Error(`User not found with id ${args.id}`)
            const deleteUser = users.splice(isUser, 1);
            posts = posts.filter(post => {
                const isMathPost = post.author.id === args.id;
                if (isMathPost) {
                    comments = comments.filter(comment => comment.postId !== post.id);
                }
                return !isMathPost
            });
            comments = comments.filter(comment => comment.postId !== args.id);
            return deleteUser[0]
        },
        // create a new Posts
        createPost: (parent, args) => {
            const isUser = users.some(user => user.id === author);
            if (!isUser) throw new Error(`User not found with id ${author}`);
            const newPost = { id: v4(), ...args?.createPostInputType };
            posts.push(newPost);
            return newPost;
        },
        // delete a post
        deletePost: (parent, args) => {
            const isPost = posts.findIndex(post => post.id === args?.id);
            const isUser = users.find(user => user.id === args?.author);
            if (!isUser) throw new Error(`Author not found with id ${args?.author}`);
            if (isPost === -1) throw new Error(`Post not found with id ${args.id}`)
            posts.splice(isPost, 1);
        },
        // create a new Comment
        createComment: (parent, args) => {
            const { postId, author } = args?.createCommentsInputType;
            const isUser = users.some(user => user.id === author);
            const isPost = posts.some(post => post.id === postId && post.published === true);
            console.log({ isUser, isPost })
            if (!isUser || !isPost) {
                throw new Error(`User and post must be specified`);
            }
            const newComment = { id: v4(), ...args?.createCommentsInputType };
            comments.push(newComment);
            return newComment;
        },
        //delete a comment
        deleteComment: (parent, args) => {
            const isPost = posts.find(post => post.id === args?.postId);
            const isUser = users.find(user => user.id === args?.author);
            const isComment = comments.findIndex(comment => comment.id === args?.id)

            if (!isUser) throw new Error(`Author not found with author ${args?.author}`);
            if (!isPost) throw new Error(`Post not found with post ${args.id}`);
            if (!isComment) throw new Error(`Comment not found with comment ${args.id}`);

            comments.splice(isComment, 1);
        },
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
    typeDefs: typeDefs,
    resolvers,
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