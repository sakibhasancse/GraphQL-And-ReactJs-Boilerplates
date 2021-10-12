import { AuthenticationError } from "apollo-server-errors";
import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config'

const Authentication = (context) => {
    const { req } = context;
    console.log(req)
    const headers = req.headers;

    if (headers.authorization) {
        const token = headers.authorization.split('Bearer ')[0];
        const user = jwt.verify(token, jwt_secret);
        if (user) return user
        else throw new AuthenticationError('Invalid/Expired token please log in');
    } else {
        throw new AuthenticationError('Authorization header must be provided')
    }
}

export default Authentication