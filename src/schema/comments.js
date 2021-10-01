import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    text: {
        type: String
    },
    postId: {
        type: String
    },
    author: {
        type: Number
    }
}, { titmeStamps: true })

export default mongoose.model('Post', postSchema);