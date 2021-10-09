import { AuthenticationError, UserInputError } from 'apollo-server-errors';
import { Comments, Users, Posts } from '../../models';

const createComment = async (args) => {
    const { posts, author } = args;

    const isUser = await Users.findOne({ _id: author });
    if (!isUser) throw new AuthenticationError('Please login first');

    const isPost = await Posts.findOne({ _id: posts })
    if (!isPost) throw new UserInputError('Post not found');
    if (isPost && isUser) {
        const comment = new Comments(args)
        return comment.save()
    }
}

const getPostsComments = async (_, args) => {
    return Comment.find({});
}

//Commnets info

const CommentsQuery = {
    posts: (parent, args) => getPosts(parent, args),
    author: (parent, args) => getAuthor(parent, args)
}
const getPosts = async (parent, args) => {
    return Posts.findOne({ _id: parent.posts });
}
const getAuthor = async (parent, args) => {
    return Users.findOne({ _id: parent.author })
}

export { createComment, getPostsComments, CommentsQuery }