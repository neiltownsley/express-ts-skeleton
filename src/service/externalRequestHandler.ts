import { RandomNumberResponse } from "./RandomNumberResponse";
import axios, { AxiosPromise } from "axios";
export async function externalRequestHandler(
  url: string,
): AxiosPromise<RandomNumberResponse[]> {
  return await axios.get(url);
}
