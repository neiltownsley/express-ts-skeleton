import {RandomNumberResponse} from "./RandomNumberResponse";
import {AxiosResponse} from "axios";
import {randomNumberRequestHandler} from "./randomNumberRequestHandler";
import pino from "pino";
import dotenv from "dotenv";
dotenv.config();

let randomNumberList: number[] = [];
export async function recursiveRandomNumberHandler(): Promise<number[]> {
    const axiosResponse: AxiosResponse<RandomNumberResponse[]> = await randomNumberRequestHandler();
    const randomNumberResponse: RandomNumberResponse[] = axiosResponse.data;
    pino().info({randomNumberResponse})

    if (randomNumberResponse && randomNumberResponse.length && 'random' in randomNumberResponse[0]) {
        const random: number = randomNumberResponse[0].random;
        randomNumberList.push(random);
    }

    setTimeout((): void => {
        recursiveRandomNumberHandler();
    }, 1000);

    return new Promise((resolve, reject) => {
        resolve(randomNumberList);
    });

}


