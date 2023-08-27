
import {RandomNumberResponse} from "../../src/service/RandomNumberResponse";
import {randomNumberRequestHandler} from "../../src/service/randomNumberRequestHandler";
import {randomNumberValidResponse} from "../mocks/randomNumberValidResponse";
import MockAdapter from "axios-mock-adapter";
import {randomNumberReachedMaximumQueryResponse} from "../mocks/randomNumberReachedMaximumQueryResponse";
import axios, {AxiosError, AxiosResponse} from "axios";
import {externalRandomNumberPath} from "../../src/configurationConstants";
import {jestExpect} from "@jest/expect";
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('randomNumberRequestHandler', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('When random number endpoint is called with valid url, should return valid response with random number and give 200 response status', async (): Promise<void> => {
        mockedAxios.get.mockResolvedValue({data: randomNumberValidResponse(), status: 200 });

        randomNumberRequestHandler().then( (resp: AxiosResponse<RandomNumberResponse[]>) => {
            expect(resp.data).toEqual(randomNumberValidResponse());
            expect(resp.status).toEqual(200);
        });


    });

  /*  it('When random number endpoint is called with invalid url, should give 404 response status', async (): Promise<void> => {
        const url: RegExp = new RegExp(`${externalRandomNumberPath}/!*`);
        mock.onGet(url).reply(404);

        const randomNumberResponse: Promise<AxiosResponse> = randomNumberRequestHandler()
        await expect(randomNumberResponse).rejects.toThrow(new AxiosError('Request failed with status code 404').message);
    });
    */


    it('When random number endpoint is called with valid url, and max query response is hit should give error response with 200 response status', async (): Promise<void> => {
        mockedAxios.get.mockResolvedValue({data: randomNumberReachedMaximumQueryResponse(), status: 200 });

        const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> = await randomNumberRequestHandler();
        expect(randomNumberResponse.data).toEqual(randomNumberReachedMaximumQueryResponse());
        expect(randomNumberResponse.status).toEqual(200);
    });

})
