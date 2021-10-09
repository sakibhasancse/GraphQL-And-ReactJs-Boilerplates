import { Posts, Users, Comments } from '../../models';
import slugify from 'slugify';
import { map } from 'lodash'

const createNewPost = async (args) => {
    const { author = '', title = '', description = '', published } = args;

    const isUser = await Users.findOne({ _id: author });
    if (!isUser) throw new Error(`User not found with id ${author}`);

    const slug = slugify(title)
    const isPost = await Posts.findOne({ slug });

    if (isPost) throw new Error(`Post already exists with title ${slug}`);
    const newPost = new Posts({ author, published, title, slug, description });

    // if (published) {
    // pubsub.publish(`post`, { post: { mutation: 'CREATE', data: newPost } });
    // }
    return newPost.save();
}

//all posts are published
const getPosts = async (args) => {
    return Posts.find({ published: true }).sort({ createdAt: -1 });
}

// Posts querys data
const PostsQuery = {
    author: (parent, args) => getAuthor(parent, args),
    comments: (parent, args) => getComment(parent, args)
}

const getAuthor = async (parent, args) => {
    return Users.findOne({ _id: parent.author })
}

const getComment = async (parent, args) => {
    return Comments.find({ postId: parent.id })
}
export { createNewPost, getPosts, PostsQuery }