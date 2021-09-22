const Subscription = {
    comment: {
        subscribe: (parent, { postId }, { data, pubsub }) => {
            const postData = data.posts.find(post => post.id === postId);
            if (!postData) throw new Error(`No post with id ${postId}`);

            return pubsub.asyncIterator(`comment ${postId}`);
        }
    }
}
export default Subscription