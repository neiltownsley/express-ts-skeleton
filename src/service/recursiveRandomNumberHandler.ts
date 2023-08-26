import {RandomNumberResponse} from "./RandomNumberResponse";
import {AxiosResponse} from "axios";
import {randomNumberRequestHandler} from "./randomNumberRequestHandler";
import app from "../app";
import {randomNumberListKey} from "../configurationConstants";

let randomNumberList: number[] = [];
export async function recursiveRandomNumberHandler(): Promise<void> {
    const axiosResponse: AxiosResponse<RandomNumberResponse[]> = await randomNumberRequestHandler();
    const randomNumberResponse: RandomNumberResponse[] = axiosResponse.data;

    if (randomNumberResponse && randomNumberResponse.length && 'random' in randomNumberResponse[0]) {
        const random: number = randomNumberResponse[0].random;
        randomNumberList.push(random);
        app.set(randomNumberListKey, randomNumberList)
    }

    setTimeout((): void => {
        recursiveRandomNumberHandler();
    }, 1000);

}


