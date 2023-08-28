import {
  externalRandomNumberPath,
  randomAverageNumberPath,
} from "../../src/configurationConstants";
import request from "supertest";
import app from "../../src/app";

import AxiosMockAdapter from "axios-mock-adapter";
import axios from "axios";
import { randomNumberValidMockResponse } from "../mocks/randomNumberValidMockResponse";
let mock: AxiosMockAdapter;

describe("averageRandomNumberRoute", (): void => {
  beforeEach(() => {});

  it("When averageRandomNumberRoute is called, and external random number service is called, should return a random number list, and average of the number list is returned in response", async (): Promise<void> => {
    mock = new AxiosMockAdapter(axios);
    const url: RegExp = new RegExp(`${externalRandomNumberPath}/!*`);
    mock.onGet(url).reply(200, randomNumberValidMockResponse());
    const response: request.Response = await request(app).get(
      randomAverageNumberPath,
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.averageNumber).toBeDefined();
    expect(response.body.averageNumberFixed).toBeDefined();
    expect(response.body.randomNumbers.length).toEqual(1);
  });
});
