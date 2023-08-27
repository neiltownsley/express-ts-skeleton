import {recursiveRandomNumberHandler} from "../../src/service/recursiveRandomNumberHandler";
import {randomNumberValidResponse, randomNumberValidResponseTwo} from "../mocks/randomNumberValidResponse";
import axios, {AxiosError, AxiosResponse} from "axios";
import MockAdapter from "axios-mock-adapter";
import {RandomNumberErrorResponse, RandomNumberSuccessfulResponse} from "../../src/service/RandomNumberResponse";
import {randomNumberReachedMaximumQueryResponse} from "../mocks/randomNumberReachedMaximumQueryResponse";
const mock: MockAdapter = new MockAdapter(axios);
jest.mock('pino');

const randomNumberResponse: RandomNumberSuccessfulResponse[] = randomNumberValidResponse();
const randomNumberReachedMaximumResponse: RandomNumberErrorResponse[] = randomNumberReachedMaximumQueryResponse();

describe('recursiveRandomNumberHandler',  (): void => {

    afterEach(() => {
        mock.reset();
    });

    it('When recursiveRandomNumberHandler, and random number service is reachable, should return a random number list', async(): Promise<void> => {
        const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/*`);
        mock.onGet(url).reply(200, randomNumberResponse);
        const randomNumberList: number[] = await recursiveRandomNumberHandler();

        expect(randomNumberList).toEqual([randomNumberResponse[0].random]);
    });

    it('When recursiveRandomNumberHandler, and random number service is reachable, and random number reached max query, should return empty list', async(): Promise<void> => {
        const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/*`);
        mock.onGet(url).reply(200, randomNumberReachedMaximumResponse);
        const randomNumberList: number[] = await recursiveRandomNumberHandler();

        expect(randomNumberList).toEqual([23]);
    });
});
