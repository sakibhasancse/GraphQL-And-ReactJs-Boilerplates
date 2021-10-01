import { environment } from './config';
import { mongoose } from './mongoose';
const env = process.env.NODE_ENV || "development";
import User from '../schema/user';
import Post from '../schema/post';
import Comment from '../schema/comments';

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});


export default { User, Post, Comment }