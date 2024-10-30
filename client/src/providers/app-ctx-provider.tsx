import { SocketProvider } from "./socket-provider"
import { MyPlaneProvider } from "./my-plane-provider"
import { PropsWithChildren } from "react"

export const AppCtxProvider = ({ children }: PropsWithChildren) => {
    return (
        <SocketProvider>
            <MyPlaneProvider>
                {children}
            </MyPlaneProvider>
        </SocketProvider>
    )
}