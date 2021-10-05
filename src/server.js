import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import cookiesParser from 'cookies-parser';

import config from './config';
import Schema from './schema';
import Connection from './config/dbConnection';

const server = new ApolloServer({
    Schema
})
const app = express();
server.applyMiddleware({ app })

app.use(cors({
    origin: config.cors.origin,
    credentials: true
}))

app.use(cookiesParser());

const PORT = parseInt(config.http_port);
app.listen(PORT, () => {
    Connection().then(() => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    }).catch(() => {
        console.log(`🚀 Server ready to faild`)
    });
})