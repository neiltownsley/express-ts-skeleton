import {recursiveRandomNumberHandler} from "../../src/service/recursiveRandomNumberHandler";
import {randomNumberValidResponse, randomNumberValidResponseTwo} from "../mocks/randomNumberValidResponse";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {RandomNumberErrorResponse, RandomNumberSuccessfulResponse} from "../../src/service/RandomNumberResponse";
import {randomNumberReachedMaximumQueryResponse} from "../mocks/randomNumberReachedMaximumQueryResponse";
import {externalRandomNumberPath} from "../../src/configurationConstants";
const mock: MockAdapter = new MockAdapter(axios);

const randomNumberResponse: RandomNumberSuccessfulResponse[] = randomNumberValidResponse();
const randomNumberResponseTwo: RandomNumberSuccessfulResponse[] = randomNumberValidResponseTwo();
const randomNumberReachedMaximumResponse: RandomNumberErrorResponse[] = randomNumberReachedMaximumQueryResponse();

describe('recursiveRandomNumberHandler',  (): void => {
    afterEach(() => {
        mock.reset();
    });

    it('When recursiveRandomNumberHandler, and random number service is reachable, should return a random number list', async(): Promise<void> => {
        const url: RegExp = new RegExp(`${externalRandomNumberPath}/*`);
        mock.onGet(url).reply(200, randomNumberResponse)
            .onGet(url).reply(200, randomNumberResponseTwo)
        setTimeout(async () => {
            let randomNumberList: number[] = await recursiveRandomNumberHandler();
            expect(randomNumberList).toEqual([23,30]);
        }, 3000)
    });

    it('When recursiveRandomNumberHandler, and random number reached max query, should only return numbers from valid response', async(): Promise<void> => {
        const url: RegExp = new RegExp(`${externalRandomNumberPath}/!*`);
        mock.onGet(url).reply(200, randomNumberReachedMaximumResponse)
            .onGet(url).reply(200, randomNumberResponseTwo)
        setTimeout(async () => {
            const randomNumberList: number[] = await recursiveRandomNumberHandler();
            expect(randomNumberList).toEqual([30]);
        }, 3000)
    });
});
