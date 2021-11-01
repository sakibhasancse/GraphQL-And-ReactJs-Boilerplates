import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    text: {
        type: String
    },
    posts: {
        type: String
    },
    author: {
        type: String
    }
}, { titmeStamps: true })

export default mongoose.model('Comments', commentSchema);