import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from './src/config';
import mongoose from 'mongoose';

import server from './src/handler';
import { createServer } from 'http';
import './src/config/dbConnection';


(async function () {

    const app = express();
    const httpServer = createServer(app);

    app.use(cookieParser());
    app.use(cors({
        origin: config.cors_origin,
        credentials: true
    }))

    await server.start();
    server.applyMiddleware({
        app,
        path: '/',
        cors: true,
        onHealthCheck: () =>
            // eslint-disable-next-line no-undef
            new Promise((resolve, reject) => {
                if (mongoose.connection.readyState > 0) {
                    resolve();
                } else {
                    reject();
                }
            }),
    });
    const PORT = parseInt(config.http_port);

    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
        // console.log(`😷 Health checks available at ${config.HEALTH_ENDPOINT}`);
    })
})();