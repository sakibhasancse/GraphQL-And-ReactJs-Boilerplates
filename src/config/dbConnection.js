import config from './index'
import mongoose from 'mongoose'
import { logger } from '../utils/logger'
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
    .then(db => {
        logger.info('Connecting to database successfully')
        return db
    })
    .catch(err => {
        logger.debug('Error connecting to database')
        console.log(err);
    });

export default connection