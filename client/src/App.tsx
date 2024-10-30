import { Theme } from "@radix-ui/themes";
import { Router } from "./router";

export const App = () => {
  return (
    <Theme appearance="dark" accentColor="tomato">
      <Router />
    </Theme>
  )
}