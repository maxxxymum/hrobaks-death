import { createContext } from "react";
import type { Target } from "../types";


export const NewTargetsContext = createContext<Target[]>([]);