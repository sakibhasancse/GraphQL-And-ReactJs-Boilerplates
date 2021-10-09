
import { v4 } from 'uuid';
import { createComment } from './commnet-services';
const commentsMutation = {
    // create a new Comment
    createComment: (parent, args) => createComment(args?.createCommentsInputType),
    //delete a comment
    deleteComment: (parent, args) => {
        // const isPost = data.posts.find(post => post.id === args?.postId);
        // const isUser = data.users.find(user => user.id === args?.author);
        // const isComment = data.comments.findIndex(comment => comment.id === args?.id)

        // if (!isUser) throw new Error(`Author not found with author ${args?.author}`);
        // if (!isPost) throw new Error(`Post not found with post ${args.id}`);
        // if (!isComment) throw new Error(`Comment not found with comment ${args.id}`);

        return {}
    },
}

export default commentsMutation