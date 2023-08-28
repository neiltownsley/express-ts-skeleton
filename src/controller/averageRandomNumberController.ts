import { Request, Response } from 'express';
import { averageRandomNumberResponseMapper } from '../service/averageRandomNumberResponseMapper';
export const averageRandomNumberController = async (
  req: Request,
  res: Response,
  randomNumberList: Promise<number[]>,
): Promise<void> => {
  res
    .json(await averageRandomNumberResponseMapper(randomNumberList))
    .status(200);
};
