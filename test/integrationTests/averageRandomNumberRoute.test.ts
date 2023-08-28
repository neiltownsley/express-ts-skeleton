import { randomAverageNumberPath } from "../../src/configurationConstants";
import request from "supertest";
import app from "../../src/app";
describe("averageRandomNumberRoute", (): void => {
  it("When averageRandomNumberRoute is called, and external random number service is called, should return a random number, and average number is returned in response", async (): Promise<void> => {
    const response: request.Response = await request(app).get(
      randomAverageNumberPath,
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.averageNumber).toBeDefined();
    expect(response.body.averageNumberFixed).toBeDefined();
    expect(response.body.randomNumbers.length).toEqual(1);
  });
});
