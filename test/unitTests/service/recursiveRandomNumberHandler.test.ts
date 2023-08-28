import { recursiveRandomNumberHandler } from "../../../src/service/recursiveRandomNumberHandler";
import {
  randomNumberValidMockResponse,
  randomNumberValidResponseTwo,
} from "../../mocks/randomNumberValidMockResponse";
import axios, { AxiosStatic } from "axios";
import {
  RandomNumberErrorResponse,
  RandomNumberSuccessfulResponse,
} from "../../../src/service/RandomNumberResponse";
import { randomNumberReachedMaximumQueryMockResponse } from "../../mocks/randomNumberReachedMaximumQueryMockResponse";

jest.mock("axios");
const mockedAxios: jest.Mocked<AxiosStatic> = axios as jest.Mocked<
  typeof axios
>;

const randomNumberResponse: RandomNumberSuccessfulResponse[] =
  randomNumberValidMockResponse();
const randomNumberResponseTwo: RandomNumberSuccessfulResponse[] =
  randomNumberValidResponseTwo();
const randomNumberReachedMaximumResponse: RandomNumberErrorResponse[] =
  randomNumberReachedMaximumQueryMockResponse();

describe("recursiveRandomNumberHandler", (): void => {
  afterEach((): void => {
    jest.resetAllMocks();
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("When recursiveRandomNumberHandler, and random number service is reachable, should return a random number response", async (): Promise<void> => {
    const mock = jest.spyOn(axios, "get");
    mockedAxios.get.mockResolvedValueOnce({
      data: randomNumberResponse,
      status: 200,
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: randomNumberResponseTwo,
      status: 200,
    });
    jest.useFakeTimers();
    const randomNumberList: number[] = await recursiveRandomNumberHandler();

    jest.runAllTimers();

    console.log("randomNumberList", randomNumberList);
    expect(mock).toHaveBeenCalledTimes(2);
    expect(randomNumberList[0]).toEqual(23);
  });

  /*it('When recursiveRandomNumberHandler, and random number reached max query, should only return numbers from valid response', async (): Promise<void> => {
       const mock = jest.spyOn(axios, 'get');
       mockedAxios.get.mockResolvedValueOnce({data: randomNumberReachedMaximumResponse, status: 200 });
       jest.useFakeTimers()
        const randomNumberList: number[] = await recursiveRandomNumberHandler();
       jest.runAllTimers();
        expect(randomNumberList).toEqual(randomNumberReachedMaximumResponse);
    }, 2000);*/
});
