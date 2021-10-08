import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

//load .env file
dotenv.config();

const config = {
    http_port: process.env.PORT || 8080,
    cors_origin: process.env.CORS_REGEX
        ? [new RegExp(process.env.CORS_REGEX)]
        : [/localhost/],
    mongo: {
        url: process.env.DB_URL || 'mongodb://localhost:27017',
        db: process.env.DB_NAME || 'graphql_Ecommers',
        reconnectedTimeout: process.env.DB_RECONNECT_TIME || 5000
    },
    public_key_file: process.env.JWT_PUB_KEY_FILE || path.join(__dirname, './sample_keys/public_key.pem'),
    public_key_b64: process.env.JWT_PUB_KEY_B64,
    logging_level: process.env.LOGGING_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
    db_logging_log: process.env.DB_DEBUG_LOG || process.env.NODE_ENV !== 'production',
    jwt_secret: process.env.JWT_SECRET || 'devSecret',
    jwt_expire_time: process.JWT_EXPIRE_TIME || '1d'
}

export default config;

export const jwtpublickey = (() => {
    if (config.public_key_b64) {
        return new Buffer(config.public_key_b64, 'base64').toString('ascii')
    }
    return fs.readFileSync(config.public_key_file);
})();