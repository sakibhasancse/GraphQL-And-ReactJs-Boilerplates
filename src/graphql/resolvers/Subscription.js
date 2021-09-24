const Subscription = {
    comment: {
        subscribe: (parent, { postId }, { data, pubsub }) => {
            const postData = data.posts.find(post => post.id === postId);
            if (!postData) throw new Error(`No post with id ${postId}`);

            return pubsub.asyncIterator(`comment ${postId}`);
        }
    },
    post: {
        subscribe: (parent, { author }, { data, pubsub }) => {
            console.log(author)
            const postData = data.posts.find(post => {
                console.log(post.author);
                return post.author === author
            });

            if (!postData) throw new Error(`No post with id author id ${author}`);
            return pubsub.asyncIterator(`userPost ${author}`);
        }
    }
}
export default Subscription