const Subscription = {
    comment: {
        subscribe: (parent, { postId }, { data, pubsub }) => {
            const postData = data.posts.find(post => post.id === postId);
            if (!postData) throw new Error(`No post with id ${postId}`);

            return pubsub.asyncIterator(`comment ${postId}`);
        }
    },
    post: {
        subscribe: (parent, { authorId }, { data, pubsub }) => {
            const postData = data.posts.find(post => {
                return post.author === authorId
            });

            if (!postData) throw new Error(`No post with id author id ${authorId}`);
            return pubsub.asyncIterator(`authorId ${authorId}`);
        }
    }
}
export default Subscription