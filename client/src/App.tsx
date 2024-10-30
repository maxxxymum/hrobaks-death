import { Theme } from "@radix-ui/themes";
import { Router } from "./router";
import { AppCtxProvider } from "./providers/app-ctx-provider";

export const App = () => {
  return (
    <Theme appearance="dark" accentColor="tomato">
      <AppCtxProvider>
        <Router />
      </AppCtxProvider>
    </Theme>
  )
}