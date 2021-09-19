import { v4 } from 'uuid';
export const Mutations = {
    // create a new Users
    createUser: (parent, args, { data }) => {
        const { name, email, phone } = args?.createUserInputType;
        if (name && email && phone) {
            const isUser = data.users.some(user => user.email === email);
            if (isUser) throw new Error(`User ${email} already exists`);
            const newUser = { id: v4(), ...args.createUserInputType };
            data.users.push(newUser);
            return newUser

        } else {
            throw new Error('All field are must ')
        }
    },
    //delete user from the database
    deleteUser: (parent, args, { data }) => {
        const isUser = data.users.findIndex(user => user.id === args?.id);
        if (isUser === -1) throw new Error(`User not found with id ${args.id}`)
        const deleteUser = data.users.splice(isUser, 1);
        posts = data.posts.filter(post => {
            const isMathPost = post.author.id === args.id;
            if (isMathPost) {
                data.comments = data.comments.filter(comment => comment.postId !== post.id);
            }
            return !isMathPost
        });
        data.comments = data.comments.filter(comment => comment.postId !== args.id);
        return deleteUser[0]
    },
    // create a new Posts
    createPost: (parent, args, { data }) => {
        const isUser = data.users.some(user => user.id === author);
        if (!isUser) throw new Error(`User not found with id ${author}`);
        const newPost = { id: v4(), ...args?.createPostInputType };
        data.posts.push(newPost);
        return newPost;
    },
    // delete a post
    deletePost: (parent, args, { data }) => {
        const isPost = data.posts.findIndex(post => post.id === args?.id);
        const isUser = data.users.find(user => user.id === args?.author);
        if (!isUser) throw new Error(`Author not found with id ${args?.author}`);
        if (isPost === -1) throw new Error(`Post not found with id ${args.id}`)
        data.posts.splice(isPost, 1);
    },
    // create a new Comment
    createComment: (parent, args, { data }) => {
        const { postId, author } = args?.createCommentsInputType;
        const isUser = data.users.some(user => user.id === author);
        const isPost = data.posts.some(post => post.id === postId && post.published === true);

        if (!isUser || !isPost) {
            throw new Error(`User and post must be specified`);
        }
        const newComment = { id: v4(), ...args?.createCommentsInputType };
        data.comments.push(newComment);
        return newComment;
    },
    //delete a comment
    deleteComment: (parent, args, { data }) => {
        const isPost = data.posts.find(post => post.id === args?.postId);
        const isUser = data.users.find(user => user.id === args?.author);
        const isComment = data.comments.findIndex(comment => comment.id === args?.id)

        if (!isUser) throw new Error(`Author not found with author ${args?.author}`);
        if (!isPost) throw new Error(`Post not found with post ${args.id}`);
        if (!isComment) throw new Error(`Comment not found with comment ${args.id}`);

        data.comments.splice(isComment, 1);
    },
}