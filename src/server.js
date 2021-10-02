import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import cookiesParser from 'cookies-parser';
import mongoose from 'mongoose';


import config from './config';
import Schema from './schema';

const app = express();

app.use(cors({
    origin: config.cors.origin,
    credentials: true
}))

app.use(cookiesParser());


const graphqlHttpOptions = {
    graphql: true,
    pretty: true,
    schema: Schema
}

app.use('/graphql', graphqlHTTP((request, response, graphQLParams) => ({ ...graphqlHttpOptions, context: request.gqlviewer })))


app.listen(3000, function () {
    console.log(`Server listening on port ${port}`);
});