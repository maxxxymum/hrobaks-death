import { Router } from "express";
import type { Controllers } from "../controllers/index.js";

export function createRouter(controllers: Controllers) {
    const router = Router();

    router.get('/plane/:id', (req, res) => controllers.planeController.getPlane(req, res));

    router.post('/plane', (req, res) => controllers.planeController.addPlane(req, res));

    router.post('/target', (req, res) => controllers.targetController.addTarget(req, res));

    return router;
}