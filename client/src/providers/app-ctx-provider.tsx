import { SocketProvider } from "./socket-provider"
import { MyPlaneProvider } from "./my-plane-provider"
import { PropsWithChildren } from "react"
import { PlanesProvider } from "./planes-provider"
import { TargetsProvider } from "./target-provider"

export const AppCtxProvider = ({ children }: PropsWithChildren) => {
    return (
        <SocketProvider>
            <MyPlaneProvider>
                <PlanesProvider>
                    <TargetsProvider>
                        {children}
                    </TargetsProvider>
                </PlanesProvider>
            </MyPlaneProvider>
        </SocketProvider>
    )
}