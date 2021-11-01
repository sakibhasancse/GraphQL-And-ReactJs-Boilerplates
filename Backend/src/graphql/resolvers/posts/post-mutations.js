import Authentication from '../../../utils/Auth'
import { createNewPost, deletePost } from './services'
const postMutation = {
    // create a new Posts
    createPost: (parent, args, context) => {
        const { userId } = Authentication(context);
        return createNewPost(args?.createPostInputType, userId)
    },
    // delete a post
    deletePost: (parent, args, context) => deletePost(parent, args?.deletePostInputType, context)
}

export default postMutation