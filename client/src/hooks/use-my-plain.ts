import { useContext } from "react";
import { MyPlaneContext } from "../context/my-plane";

export const useMyPlane = () => {
    const context = useContext(MyPlaneContext);

    if (!context) {
        throw new Error('useMyPlane must be used within a MyPlaneProvider');
    }

    return context;
}