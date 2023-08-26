import {Request, Response} from "express";
import app from "../app";
import {averageNumberCalculator} from "../service/averageNumberCalculator";

export const averageRandomNumberController = (req: Request, res: Response) => {
  const randomNumberList: number[] = app.get('randomNumberList')
  const averageNumber = averageNumberCalculator([1, 2, 3]);

  res.send({averageNumber}).status(200);
};
