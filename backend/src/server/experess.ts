import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initControllers } from '../controllers/index.js';

const PORT = 4000;

export function createExpressApp(controllers: ReturnType<typeof initControllers>) {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/plane/:id', (req, res) => controllers.planeController.getPlane(req, res));

    app.post('/plane', (req, res) => controllers.planeController.addPlane(req, res));

    app.post('/target', (req, res) => controllers.targetController.addTarget(req, res));

    return app;
}
