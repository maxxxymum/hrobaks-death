import { PlanesContext } from "../context/planes";
import { useContext } from "react";

export const usePlanes = () => {
    const planes = useContext(PlanesContext);

    if (!planes) {
        throw new Error("usePlanes must be used within a PlanesProvider");
    }

    return planes;
}