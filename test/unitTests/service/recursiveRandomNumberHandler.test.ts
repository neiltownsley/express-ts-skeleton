import { recursiveRandomNumberHandler } from "../../../src/service/recursiveRandomNumberHandler";
import {
  randomNumberValidMockResponse,
  randomNumberValidResponseTwo,
} from "../../mocks/randomNumberValidMockResponse";
import axios, { AxiosStatic } from "axios";
import { RandomNumberSuccessfulResponse } from "../../../src/service/RandomNumberResponse";

import { randomNumberUrl } from "../../../src/configurationConstants";

jest.mock("axios");
const mockedAxios: jest.Mocked<AxiosStatic> = axios as jest.Mocked<
  typeof axios
>;

const randomNumberResponse: RandomNumberSuccessfulResponse[] =
  randomNumberValidMockResponse();
const randomNumberResponseTwo: RandomNumberSuccessfulResponse[] =
  randomNumberValidResponseTwo();

describe("recursiveRandomNumberHandler", (): void => {
  afterEach((): void => {
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  it("When recursiveRandomNumberHandler is called, random number service is called recursively, should return a random number response", async (): Promise<void> => {
    const axiosGetMock: jest.SpyInstance = jest.spyOn(axios, "get");
    mockedAxios.get.mockResolvedValueOnce({
      data: randomNumberResponse,
      status: 200,
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: randomNumberResponseTwo,
      status: 200,
    });

    const randomNumberList: number[] = await recursiveRandomNumberHandler();
    console.log("randomNumberList", randomNumberList);
    jest.advanceTimersByTime(2000);

    expect(axiosGetMock).toHaveBeenCalledTimes(2);
    expect(axiosGetMock).toHaveBeenCalledWith(randomNumberUrl);
    expect(randomNumberList[0]).toEqual(23);
  });
});
