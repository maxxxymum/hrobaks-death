import type { Request, Response } from "express";
import { PlaneService } from "../services/plane.js";
import { TargetService } from "../services/target.js";

export class PlaneController {
    private planeService: PlaneService;
    private targetService: TargetService

    constructor(planeService: PlaneService, targetService: TargetService) {
        this.planeService = planeService;
        this.targetService = targetService;
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
        const targetsNearBy = await this.targetService.getAllTargetsNearBy(plane);

        res.status(201).json({ plane, planesNearBy, targetsNearBy });
    }
}