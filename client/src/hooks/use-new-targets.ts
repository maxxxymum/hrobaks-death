import { NewTargetsContext } from "../context/new-targets";
import { useContext } from "react";

export const useNewTargets = () => {
    const context = useContext(NewTargetsContext);

    if (!context) {
        throw new Error('useNewTargets must be used within a NewTargetsProvider');
    }

    return context;
}