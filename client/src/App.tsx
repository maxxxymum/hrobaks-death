import { Theme } from "@radix-ui/themes";
import { Router } from "./router";
import { SocketProvider } from "./providers/socket-provider";

export const App = () => {
  return (
    <Theme appearance="dark" accentColor="tomato">
      <SocketProvider>
        <Router />
      </SocketProvider>
    </Theme>
  )
}