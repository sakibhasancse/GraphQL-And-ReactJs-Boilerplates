import { v4 } from 'uuid';
const postMutation = {
    // create a new Posts
    createPost: (parent, args) => {
        // const { author = '', published = false } = args?.createPostInputType
        // const isUser = data.users.some(user => user.id === author);
        // if (!isUser) throw new Error(`User not found with id ${author}`);
        // const newPost = { id: v4(), ...args?.createPostInputType };
        // if (published) {
        //     pubsub.publish(`post`, { post: { mutation: 'CREATE', data: newPost } });
        // }
        // data.posts.push(newPost);
        return {};
    },
    // delete a post
    deletePost: (parent, args) => {
        // const isPost = data.posts.findIndex(post => post.id === args?.id);
        // const isUser = data.users.find(user => user.id === args?.author);
        // if (!isUser) throw new Error(`Author not found with id ${args?.author}`);
        // if (isPost === -1) throw new Error(`Post not found with id ${args.id}`)
        // data.posts.splice(isPost, 1);

        return {}
    }
}

export default postMutation