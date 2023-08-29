import { Request, Response } from 'express';
import { skeletonMockResponse } from '../../test/mocks/skeletonMockResponse';
export const skeletonController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.json(skeletonMockResponse()).status(200);
};
