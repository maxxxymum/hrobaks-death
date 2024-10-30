export type Plane = {
    id: string;
    name: string;
    lat: number;
    lng: number;
}

export type Target = {
    id: string
    planeId: string;
    lat: number;
    lng: number;
}