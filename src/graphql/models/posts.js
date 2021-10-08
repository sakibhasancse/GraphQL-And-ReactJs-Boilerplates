import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    description: {
        type: String
    },
    published: {
        type: Boolean
    },
    author: {
        type: String
    }
}, { titmeStamps: true })

export default mongoose.model('Post', postSchema);