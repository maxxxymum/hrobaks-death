import { createContext, Dispatch, SetStateAction } from "react";
import type { Plane } from "../types";

type PlainContext = { myPlane: Plane | undefined, setMyPlane: Dispatch<SetStateAction<Plane | undefined>> };

export const MyPlaneContext = createContext<PlainContext | undefined>(undefined);