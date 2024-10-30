import { createContext, Dispatch, SetStateAction } from "react";
import { Target } from "../types";

type TargetsContext = {
    targets: Target[];
    setTargets: Dispatch<SetStateAction<Target[]>>;
};

export const TargetsContext = createContext<TargetsContext | undefined>(undefined);