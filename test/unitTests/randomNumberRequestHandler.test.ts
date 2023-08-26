
import {RandomNumberResponse} from "../../src/service/RandomNumberResponse";
import {randomNumberRequestHandler} from "../../src/service/randomNumberRequestHandler";
import {randomNumberValidResponse} from "../mocks/randomNumberValidResponse";
import MockAdapter from "axios-mock-adapter";
import {randomNumberReachedMaximumQueryResponse} from "../mocks/randomNumberReachedMaximumQueryResponse";
import axios, {AxiosError, AxiosResponse} from "axios";
const mock: MockAdapter = new MockAdapter(axios);
describe('fetchRandomNumber', () => {

    afterEach(() => {
        mock.reset();
    });


    it('When random number endpoint is called with valid url, should return valid response with random number and give 200 response status', async (): Promise<void> => {
        const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/*`);
        mock.onGet(url).reply(200, randomNumberValidResponse());
        const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> = await randomNumberRequestHandler();
        expect(randomNumberResponse.data).toEqual(randomNumberValidResponse());
        expect(randomNumberResponse.status).toEqual(200);
    });

    it('When random number endpoint is called with invalid url, should give 404 response status', async (): Promise<void> => {
        const randomNumberPath = "/bad-path";
        const url: RegExp = new RegExp(`${randomNumberPath}/*`);
        mock.onGet(url).reply(404);

        const randomNumberResponse: Promise<AxiosResponse> = randomNumberRequestHandler()
        await expect(randomNumberResponse).rejects.toThrow(new AxiosError('Request failed with status code 404').message);
    });

    it('When random number endpoint is called with valid url, and max query response is hit should give error response with 200 response status', async (): Promise<void> => {
        const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/*`);
        mock.onGet(url).reply(200, randomNumberReachedMaximumQueryResponse());
        const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> = await randomNumberRequestHandler();
        expect(randomNumberResponse.data).toEqual(randomNumberReachedMaximumQueryResponse());
        expect(randomNumberResponse.status).toEqual(200);
    });

})
