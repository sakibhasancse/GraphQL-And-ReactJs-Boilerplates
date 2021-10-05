import config from './index'
import mongoose from 'mongoose'

/**
 * Mongoose Connection
**/

// mongoose.set('useCreateIndex', true);
const Connection = mongoose.connect(config.mongo.url + '/' + config.mongo.db, {
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

if (config.db_debug_log) {
    mongoose.set('debug', true);
}

export default Connection