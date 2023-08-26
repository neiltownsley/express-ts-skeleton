import { RandomNumberResponse } from "./RandomNumberResponse";
import axios, {AxiosPromise} from "axios";
import {randomNumberUrl} from "./../configurationConstants";

export async function randomNumberRequestHandler(): AxiosPromise<RandomNumberResponse[]> {
    return await axios.get(randomNumberUrl)
}
