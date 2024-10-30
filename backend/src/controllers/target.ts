import type { Request, Response } from "express";
import type { TargetService } from "../services/target.js";

export class TargetController {
    private targetService: TargetService;

    constructor(targetService: TargetService) {
        this.targetService = targetService;
    }

    async addTarget(req: Request, res: Response) {
        const target = req.body;

        if (!target.lat || !target.lng || !target.planeId) {
            res.status(400).json({ error: 'Missing required fields' });
        }

        const plane = await this.targetService.addTarget(target);

        res.status(201).json(plane);
    }
}