import { createContext, Dispatch, SetStateAction } from "react";
import { Plane } from "../types";

type PlanesContext = {
    planes: Plane[];
    setPlanes: Dispatch<SetStateAction<Plane[]>>;
};

export const PlanesContext = createContext<PlanesContext | undefined>(undefined);