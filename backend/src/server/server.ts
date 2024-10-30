import { initServices } from "../services/index.js";
import { initControllers } from "../controllers/index.js";
import { createServer } from 'node:http';
import { startSocketServer } from './web-socket.js';

const PORT = 4000;

import { createExpressApp } from './experess.js';

export function startServer() {
  const services = initServices();
  const controllers = initControllers(services);

  const app = createExpressApp(controllers);
  const server = createServer(app);
  startSocketServer(server);

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  return app;
}
