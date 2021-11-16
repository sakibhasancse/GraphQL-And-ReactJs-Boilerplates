import { AuthenticationError } from "apollo-server-errors";
import jwt from 'jsonwebtoken';
import config from '../config'

const Authentication = (context) => {
    const { req } = context;
    const headers = req && req.headers || '';

    if (headers && headers.authorization) {
        const token = headers.authorization.split('Bearer ')[1];
        console.log({ token })
        const user = jwt.verify(token, config.jwt_secret);
        console.log({ user })
        if (user) return user
        else throw new AuthenticationError('Invalid/Expired token please log in');
    } else {
        throw new AuthenticationError('Authorization header must be provided')
    }
}

export default Authentication