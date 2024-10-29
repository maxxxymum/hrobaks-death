import express from 'express';

const PORT = 4000;

export function startServer() {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  return app;
}
