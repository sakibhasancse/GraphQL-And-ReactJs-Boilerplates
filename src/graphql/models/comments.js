import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    text: {
        type: String
    },
    postId: {
        type: String
    },
    author: {
        type: String
    }
}, { titmeStamps: true })

export default mongoose.model('Commets', postSchema);