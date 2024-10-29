import type { Request, Response } from "express";
import { PlaneService } from "../services/plane.js";

export class PlaneController {
    private planeService: PlaneService;

    constructor(userService: PlaneService) {
        this.planeService = userService;
    }

    getPlane(req: Request, res: Response) { };

    async addPlane(req: Request, res: Response) {
        const { name, lat, lng } = req.body;

        if (!name) {
            res.status(400).json({ error: 'Missing required fields' });
        }

        const planeId = await this.planeService.addPlane({ name, lat, lng });

        res.status(201).json({ id: planeId, name, lat, lng });
    }
}