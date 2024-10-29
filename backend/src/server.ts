import express from 'express';
import bodyParser from 'body-parser';

import { initServices } from "./services/index.js";
import { initControllers } from "./controllers/index.js";

const PORT = 4000;

export function startServer() {
  const services = initServices();
  const controllers = initControllers(services);

  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  app.post('/plane', async (req, res) => controllers.planeController.addPlane(req, res));

  return app;
}
