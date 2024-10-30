import { createContext, Dispatch, SetStateAction } from "react";

export type Plane = {
    id: string;
    name: string;
    lat: number;
    lng: number;
}

type PlainContext = { myPlane: Plane | undefined, setMyPlane: Dispatch<SetStateAction<Plane | undefined>> };

export const MyPlaneContext = createContext<PlainContext | undefined>(undefined);