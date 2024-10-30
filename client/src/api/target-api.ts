import { Target } from "../types";
import { httpClient } from "./httpClient"

export const createTargetApi = async ({ planeId, lat, lng }: Omit<Target, 'id' | 'distance'>) => {
    const targetData = new URLSearchParams();

    targetData.append("planeId", planeId);
    targetData.append("lat", lat.toString());
    targetData.append("lng", lng.toString());

    return await httpClient.post<Target>("target", { body: targetData });
}