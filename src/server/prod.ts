import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import allRoutes from 'server/route';
import template from 'server/route/view/template';

config();

const {
  HTTP_PORT = 8080,
} = process.env;

const app = express();

const createServer = async () => {
  app.use(allRoutes);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', async (req, res) => {
    const html = template({ req, isProd: true });
    res.status(200).send(html);
  });
  app.listen(Number(HTTP_PORT), '', () => {
    console.log(`server started at http://:${HTTP_PORT}`);
  });
}

createServer();