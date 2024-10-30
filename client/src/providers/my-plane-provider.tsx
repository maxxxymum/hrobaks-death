import { PropsWithChildren, useMemo, useState } from "react";
import { MyPlaneContext, Plane } from "../context/my-plane";

export const MyPlaneProvider = ({ children }: PropsWithChildren) => {
    const [myPlane, setMyPlane] = useState<Plane | undefined>(undefined);
    const context = useMemo(() => ({ myPlane, setMyPlane }), [myPlane, setMyPlane]);

    return <MyPlaneContext.Provider value={context}>{children}</MyPlaneContext.Provider>
};