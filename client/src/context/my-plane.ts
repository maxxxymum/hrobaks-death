import { createContext } from "react";
import type { Plane } from "../types";

type PlainContext = { myPlane: Plane | undefined, setMyPlane: (plane: Plane) => void };

export const MyPlaneContext = createContext<PlainContext | undefined>(undefined);