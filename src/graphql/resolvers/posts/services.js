import { Posts, Users } from '../../models';
import slugify from 'slugify';

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
export { createNewPost }