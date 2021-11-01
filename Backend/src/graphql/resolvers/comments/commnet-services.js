import { AuthenticationError, UserInputError } from 'apollo-server-errors';
import { Comments, Users, Posts } from '../../models';
import Authentication from '../../../utils/Auth';

const createComment = async (_, args, context) => {

    const { userId } = Authentication(context);
    if (!userId) throw new AuthenticationError('user not authorize')

    const { posts } = args;

    const isUser = await Users.findOne({ _id: userId });
    if (!isUser) throw new AuthenticationError('Please login first');

    const isPost = await Posts.findOne({ _id: posts })
    if (!isPost) throw new UserInputError('Post not found');
    if (isPost && isUser && userId) {
        const comment = new Comments(args)
        return comment.save()
    }
}


const deleteComment = async () => {

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


export { createComment, getPostsComments, CommentsQuery, deleteComment }