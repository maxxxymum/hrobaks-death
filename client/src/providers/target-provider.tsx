import { PropsWithChildren, useState } from "react";
import { TargetsContext } from "../context/targets";
import { Target } from "../types";

export const TargetsProvider = ({ children }: PropsWithChildren) => {
    const [targets, setTargets] = useState<Target[]>([]);

    return <TargetsContext.Provider value={{ targets, setTargets }}>{children}</TargetsContext.Provider>
};