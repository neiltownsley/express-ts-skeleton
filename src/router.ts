import express, { Request, Response, Router } from 'express';
import { skeletonRoute } from './configurationConstants';
import { skeletonController } from './controller/skeletonController';
const router: Router = express.Router();
router.get(skeletonRoute, (req: Request, res: Response): void => {
  skeletonController(req, res);
});

export default router;
