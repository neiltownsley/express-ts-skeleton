import { averageNumberCalculator } from "./averageNumberCalculator";
import { AverageRandomNumberResponse } from "./AverageRandomNumberResponse";

export const averageRandomNumberResponseMapper = async (
  randomNumberList: Promise<number[]>,
): Promise<AverageRandomNumberResponse> => {
  const randomNumbers: number[] = await randomNumberList;
  console.log(randomNumbers);
  const averageNumber: number = averageNumberCalculator(randomNumbers);
  const averageNumberFixed: string =
    averageNumberCalculator(randomNumbers).toFixed(0);

  return new Promise((resolve) => {
    resolve({ randomNumbers, averageNumber, averageNumberFixed });
  });
};
