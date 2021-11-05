import Authentication from '../../../utils/Auth'
import { logger } from '../../../utils/logger';
import { createNewPost, deletePost } from './services'
const postMutation = {
    // create a new Posts
    createPost: (parent, args, context) => {
        logger.info(`Create new Post`);
        const { userId } = Authentication(context);
        return createNewPost(args?.inputData, userId)
    },
    // delete a post
    deletePost: (parent, args, context) => deletePost(parent, args?.deletePostInputType, context)
}

export default postMutation