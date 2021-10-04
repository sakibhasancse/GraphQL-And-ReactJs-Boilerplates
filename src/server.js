import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import cookiesParser from 'cookies-parser';

import config from './config';
import Schema from './schema';
import Connection from './config/dbConnection';


let GraphQlServer;

const GraphQlServerConfig = (callback) => {

    Connection()
        .then(function (connection) {

        }).catch(function (error) {

        });

    const app = express();

    app.use(cors({
        origin: config.cors.origin,
        credentials: true
    }))

    app.use(cookiesParser());
    app.use('/healthcheck', require('express-healthcheck')());

    const graphqlHttpOptions = {
        graphql: true,
        pretty: true,
        schema: Schema
    }
    const PORT = parseInt(config.http_port);

    app.use('/graphql', graphqlHTTP((request, response, graphQLParams) => ({ ...graphqlHttpOptions, context: request.gqlviewer })))


    GraphQlServer = app.listen(PORT, function () {
        console.log(`Server listening on http://localhost:${PORT}`);
        if (callback) {
            callback()
        }
    });
}


const StartUpServer = (callback) => {
    //Shut down the server
    if (GraphQlServer) {
        GraphQlServer.close()
    }

    const work = 0;

    const handleWork = () => {
        work++;
        if (work === 1 && callback) {
            callback();
        }
    }
    GraphQlServerConfig(handleWork);
    console.log({ work })
}

StartUpServer();