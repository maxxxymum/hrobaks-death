import { SocketProvider } from "./socket-provider"
import { MyPlaneProvider } from "./my-plane-provider"
import { PropsWithChildren } from "react"
import { PlanesProvider } from "./planes-provider"
import { TargetsProvider } from "./target-provider"
import { NewTargetsProvider } from "./new-targets-provider"

export const AppCtxProvider = ({ children }: PropsWithChildren) => {
    return (
        <SocketProvider>
            <MyPlaneProvider>
                <PlanesProvider>
                    <NewTargetsProvider>
                        <TargetsProvider>
                            {children}
                        </TargetsProvider>
                    </NewTargetsProvider>
                </PlanesProvider>
            </MyPlaneProvider>
        </SocketProvider>
    )
}