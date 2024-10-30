import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export function createExpressApp() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    return app;
}
