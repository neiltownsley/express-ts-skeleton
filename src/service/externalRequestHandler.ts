import { RandomNumberResponse } from "./RandomNumberResponse";
import axios, { AxiosPromise } from "axios";
import pino from "pino";
export async function externalRequestHandler(
  url: string,
): AxiosPromise<RandomNumberResponse[]> {
  try {
    return await axios.get(url);
  } catch (error: unknown) {
    console.log(error);
    pino().error(error);
    throw error;
  }
}
