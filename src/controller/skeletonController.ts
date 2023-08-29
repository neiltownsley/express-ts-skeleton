import { Request, Response } from 'express';
import { skeletonMockResponse } from '../../test/mocks/skeletonMockResponse';
export const skeletonController = (req: Request, res: Response): void => {
  res.json(skeletonMockResponse()).status(200);
};
