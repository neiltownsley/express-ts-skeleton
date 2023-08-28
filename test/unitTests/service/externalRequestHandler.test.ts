import { RandomNumberResponse } from "../../../src/service/RandomNumberResponse";
import { externalRequestHandler } from "../../../src/service/externalRequestHandler";
import { randomNumberValidMockResponse } from "../../mocks/randomNumberValidMockResponse";
import { randomNumberReachedMaximumQueryMockResponse } from "../../mocks/randomNumberReachedMaximumQueryMockResponse";
import axios, { AxiosError, AxiosResponse, AxiosStatic } from "axios";
import { randomNumberUrl } from "../../../src/configurationConstants";

jest.mock("axios");
const mockedAxios: jest.Mocked<AxiosStatic> = axios as jest.Mocked<
  typeof axios
>;
describe("randomNumberRequestHandler", () => {
  afterEach((): void => {
    jest.clearAllMocks();
  });

  it("When random number endpoint is called with valid url, should return valid response with random number and give 200 response status", async (): Promise<void> => {
    mockedAxios.get.mockResolvedValue({
      data: randomNumberValidMockResponse(),
      status: 200,
    });

    const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> =
      await externalRequestHandler(randomNumberUrl);
    expect(randomNumberResponse.data).toEqual(randomNumberValidMockResponse());
    expect(randomNumberResponse.status).toEqual(200);
  });

  it("When random number endpoint is called with invalid url, should give 404 response status", async (): Promise<void> => {
    const axiosError: AxiosError = new AxiosError(
      "Request failed with status code 404",
    );
    axiosError.status = 404;
    mockedAxios.get.mockResolvedValue(axiosError);

    const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> =
      await externalRequestHandler(randomNumberUrl);
    expect(randomNumberResponse).toEqual(axiosError);
    expect(randomNumberResponse.status).toEqual(404);
  });

  it("When random number endpoint is called with valid url, and max query response is hit should give error response with 200 response status", async (): Promise<void> => {
    mockedAxios.get.mockResolvedValue({
      data: randomNumberReachedMaximumQueryMockResponse(),
      status: 200,
    });

    const randomNumberResponse: AxiosResponse<RandomNumberResponse[]> =
      await externalRequestHandler(randomNumberUrl);
    expect(randomNumberResponse.data).toEqual(
      randomNumberReachedMaximumQueryMockResponse(),
    );
    expect(randomNumberResponse.status).toEqual(200);
  });
});
