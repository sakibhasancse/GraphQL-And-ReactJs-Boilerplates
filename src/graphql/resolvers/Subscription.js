const Subscription = {
    comment: {
        subscribe: (parent, args, { data, pubsub }) => {
            // const postData = data.posts.find(post => post.id === postId);
            // if (!postData) throw new Error(`No post with id ${postId}`);

            return pubsub.asyncIterator(`comment`);
        }
    },
    post: {
        subscribe: (parent, args, { data, pubsub }) => {
            return pubsub.asyncIterator('post');
        }
    },
    user: {
        subscribe: (parent, args, { data, pubsub }) => {
            return pubsub.asyncIterator('user');
        }
    }
}
export default Subscription