import { RandomNumberResponse } from "./RandomNumberResponse";
import { AxiosResponse } from "axios";
import { externalRequestHandler } from "./externalRequestHandler";
import pino from "pino";
import dotenv from "dotenv";
import { randomNumberUrl } from "../configurationConstants";
dotenv.config();

const randomNumberList: number[] = [];
export async function recursiveRandomNumberHandler(): Promise<number[]> {
  const axiosResponse: AxiosResponse<RandomNumberResponse[]> =
    await externalRequestHandler(randomNumberUrl);
  const randomNumberResponse: RandomNumberResponse[] = axiosResponse.data;
  pino().info({ randomNumberResponse });

  if (
    randomNumberResponse &&
    randomNumberResponse.length &&
    "random" in randomNumberResponse[0]
  ) {
    const random: number = Number(randomNumberResponse[0].random);
    randomNumberList.push(random);
  }

  setTimeout((): void => {
    recursiveRandomNumberHandler();
  }, 1000);

  return new Promise((resolve): void => {
    resolve(randomNumberList);
  });
}
