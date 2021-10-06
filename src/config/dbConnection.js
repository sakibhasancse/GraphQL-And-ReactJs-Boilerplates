import config from './index'
import mongoose from 'mongoose'

/**
 * Mongoose Connection
**/
mongoose.Promise = global.Promise;

const connection = mongoose.connect(config.mongo.url + '/' + config.mongo.db, {

    useNewUrlParser: true,
});

// mongoose.set('useCreateIndex', true);

if (config.db_debug_log) {
    mongoose.set('debug', true);
}
connection
    .then(db => db)
    .catch(err => {
        console.log(err);
    });

export default connection