import { initServices } from "../services/index.js";
import { initControllers } from "../controllers/index.js";
import { createServer } from 'node:http';
import { startSocketServer } from './web-socket.js';
import { createRouter } from "./router.js";

const PORT = 4000;

import { createExpressApp } from './experess.js';

export function startServer() {
  const app = createExpressApp();
  const server = createServer(app);
  const socket = startSocketServer(server);

  const services = initServices({ socket });
  const controllers = initControllers(services);
  const router = createRouter(controllers);

  app.use(router)

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  return app;
}
