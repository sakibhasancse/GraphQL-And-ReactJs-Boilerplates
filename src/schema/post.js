import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    decription: {
        type: String
    },
    published: {
        type: String
    },
    author: {
        type: Number
    }
}, { titmeStamps: true })

export default mongoose.model('Post', postSchema);