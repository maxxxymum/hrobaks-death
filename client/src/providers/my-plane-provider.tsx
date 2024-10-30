import { PropsWithChildren, useMemo, useState } from "react";
import { MyPlaneContext } from "../context/my-plane";
import type { Plane } from "../types";

export const MyPlaneProvider = ({ children }: PropsWithChildren) => {
    const [myPlane, setMyPlane] = useState<Plane | undefined>(undefined);
    const context = useMemo(() => ({ myPlane, setMyPlane }), [myPlane, setMyPlane]);

    return <MyPlaneContext.Provider value={context}>{children}</MyPlaneContext.Provider>
};