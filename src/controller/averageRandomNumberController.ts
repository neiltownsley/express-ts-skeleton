import { Request, Response } from "express";
import { averageNumberCalculator } from "../service/averageNumberCalculator";
import { randomAverageNumberError } from "../configurationConstants";

export const averageRandomNumberController = async (
  req: Request,
  res: Response,
  randomNumberList: Promise<number[]>,
): Promise<void> => {
  randomNumberList.then((randomNumbers: number[]): void => {
    const averageNumber: number = averageNumberCalculator(randomNumbers);
    const averageNumberFixed: string =
      averageNumberCalculator(randomNumbers).toFixed(0);
    if (!randomNumbers.length || !averageNumber) {
      res.send({ randomAverageNumberError }).status(500);
    }
    res.json({ randomNumbers, averageNumber, averageNumberFixed }).status(200);
  });
};
