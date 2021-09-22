const Users = {
    //user with posts and comments
    post(parent, args, { data }) {
        return data.posts.filter((post) => {
            return post.author === parent.id
        })
    },
    comments(parent, args) {
        return data.comments.filter((comment) => {
            return comment.author === parent.id;
        })
    }
}
export default Users