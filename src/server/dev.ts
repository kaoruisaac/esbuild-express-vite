import { config } from 'dotenv';
import path from 'path';
import express from 'express';
import template from 'server/route/view/template';
import allRoutes from 'server/route';
import { createServer as createViteServer } from 'vite';

config();

const {
  HTTP_PORT = 8080,
} = process.env;
const app = express();

const createServer = async () => {
  const viteServer = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });
  app.use(viteServer.middlewares);
  app.use(allRoutes);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', async (req, res) => {
    const html = await viteServer.transformIndexHtml(req.url, template({ req, isProd: false }));
    res.status(200).send(html);
  });
  app.listen(Number(HTTP_PORT), '', () => {
    console.log(`server started at http://localhost:${HTTP_PORT}`);
  });
}

createServer();