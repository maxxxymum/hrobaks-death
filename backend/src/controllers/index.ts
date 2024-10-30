import { PlaneController } from "./plane.js";
import { initServices } from "../services/index.js";
import { TargetController } from "./target.js";

export function initControllers(services: ReturnType<typeof initServices>) {
    return {
        planeController: new PlaneController(services.planeService),
        targetController: new TargetController(services.targetService)

    }
}