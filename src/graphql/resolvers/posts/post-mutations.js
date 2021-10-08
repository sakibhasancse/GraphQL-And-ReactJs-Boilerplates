import { createNewPost} from './services'
const postMutation = {
    // create a new Posts
    createPost: (parent, args) => {
        return createNewPost(args?.createPostInputType)
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