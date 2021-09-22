//comment with author and posts
const Comments = {
    author(parent, args, { data }) {
        return data.users.find((user) => {
            return user.id === parent.author;
        })
    },
    postId(parent, args, { data }) {
        return data.posts.find((post) => {
            return post.id === parent.postId;
        })
    }
};
export default Comments