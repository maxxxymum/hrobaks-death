import type { Request, Response } from "express";
import { PlaneService } from "../services/plane.js";

export class PlaneController {
    private planeService: PlaneService;

    constructor(planeService: PlaneService) {
        this.planeService = planeService;
    }

    async getPlane(req: Request, res: Response) {
        const { id } = req.params;

        if (id) {
            const plane = await this.planeService.getPlane(id);

            if (plane) {
                res.json(plane);
            } else {
                res.status(404).json({ error: 'Plane not found' });
            }
        } else {
            res.status(400).json({ error: 'Missing plane id' });
        }
    };

    async addPlane(req: Request, res: Response) {
        const { name, lat, lng } = req.body;

        if (!name) {
            res.status(400).json({ error: 'Missing required fields' });
        }

        const plane = await this.planeService.addPlane({ name, lat, lng });
        const planesNearBy = await this.planeService.getAllPlanesNearBy(plane);

        console.log('planesNearBy', planesNearBy);

        res.status(201).json({ plane, planesNearBy });
    }
}