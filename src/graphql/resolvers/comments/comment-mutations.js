import { v4 } from 'uuid';
const commentsMutation = {
    // create a new Comment
    createComment: (parent, args, { data, pubsub }) => {
        const { postId, author } = args?.createCommentsInputType;
        const isUser = data.users.find(user => user.id === author);
        const isPost = data.posts.find(post => post.id === postId && post.published === true);
        if (!isUser || !isPost) {
            throw new Error(`User and post must be specified`);
        }
        const newComment = { id: v4(), ...args?.createCommentsInputType };
        data.comments.push(newComment);

        pubsub.publish(`comment`, { comment: { mutation: 'CREATE_COMMENT', data: newComment } })
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

export default commentsMutation