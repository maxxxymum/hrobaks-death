import { Theme } from "@radix-ui/themes";
import { Router } from "./router";
import { io } from "socket.io-client";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');
    console.log('connected to socket');

    return () => {
      socket.disconnect();
    }
  }, [])

  return (
    <Theme appearance="dark" accentColor="tomato">
      <Router />
    </Theme>
  )
}