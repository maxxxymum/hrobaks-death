import { Plane } from "../context/my-plane";
import { httpClient } from "./httpClient";

export const createPlane = async ({ name, lat, lng }: Omit<Plane, 'id'>) => {
    const planeData = new URLSearchParams();
    planeData.append("name", name);
    planeData.append("lat", lat.toString());
    planeData.append("lng", lng.toString());

    return await httpClient.post<Plane>("plane", { body: planeData }).json();
};