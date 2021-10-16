
import { v4 } from 'uuid';
import { createComment, deleteComment } from './commnet-services';
const commentsMutation = {
    // create a new Comment
    createComment: (parent, args, context) => {
        return createComment(parent, args, context)
    },
    //delete a comment
    deleteComment: (parent, args) => deleteComment(parent, args, context),
}

export default commentsMutation