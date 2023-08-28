import { RandomNumberResponse } from "../../src/service/RandomNumberResponse";
import { randomNumberRequestHandler } from "../../src/service/randomNumberRequestHandler";
import { randomNumberValidResponse } from "../mocks/randomNumberValidResponse";
import { randomNumberReachedMaximumQueryResponse } from "../mocks/randomNumberReachedMaximumQueryResponse";
import axios, { AxiosResponse, AxiosStatic } from "axios";

jest.mock("axios");
const mockedAxios: jest.Mocked<AxiosStatic | AxiosStatic> =
  axios as jest.Mocked<typeof axios>;
describe("randomNumberRequestHandler", () => {
  afterEach((): void => {
    jest.clearAllMocks();
  });

  it("When random number endpoint is called with valid url, should return valid response with random number and give 200 response status", async (): Promise<void> => {
    mockedAxios.get.mockResolvedValue({
      data: randomNumberValidResponse(),
      status: 200,
    });

    const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> =
      await randomNumberRequestHandler();
    expect(randomNumberResponse.data).toEqual(randomNumberValidResponse());
    expect(randomNumberResponse.status).toEqual(200);
  });

  /*it('When random number endpoint is called with invalid url, should give 404 response status', async (): Promise<void> => {
       mockedAxios.get.mockRejectedValue({ status: 404 });

        const randomNumberResponse: Promise<AxiosResponse> = randomNumberRequestHandler().then(() => {
            await expect(randomNumberResponse).rejects.toThrow(new AxiosError('Request failed with status code 404').message);
        });

    });*/

  it("When random number endpoint is called with valid url, and max query response is hit should give error response with 200 response status", async (): Promise<void> => {
    mockedAxios.get.mockResolvedValue({
      data: randomNumberReachedMaximumQueryResponse(),
      status: 200,
    });

    const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> =
      await randomNumberRequestHandler();
    expect(randomNumberResponse.data).toEqual(
      randomNumberReachedMaximumQueryResponse(),
    );
    expect(randomNumberResponse.status).toEqual(200);
  });
});
