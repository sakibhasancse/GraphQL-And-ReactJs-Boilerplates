const Posts = {
    //post  with author and comments
    author(parent, args, { data }) {
        return data.users.find((user) => {
            return user.id === parent.author;
        })
    },
    comments(parent, args, { data }) {
        return data.comments.filter((comment) => {
            return comment.postId === parent.id;
        })
    }
}
export default Posts