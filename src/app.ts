import express, { Express, Request, Response } from 'express';
import { skeletonController } from './controller/skeletonController';
import { skeletonRoute } from './configurationConstants';
const app: Express = express();
app.get(skeletonRoute, async (req: Request, res: Response): Promise<void> => {
  await skeletonController(req, res);
});
export default app;
