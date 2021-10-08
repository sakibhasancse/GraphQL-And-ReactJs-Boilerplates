import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
    }
}, { titmeStamps: true })

export default mongoose.model('User', userSchema);