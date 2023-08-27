import request from "supertest";
import DoneCallback = jest.DoneCallback;
import axios, {AxiosError, AxiosResponse} from "axios";
import MockAdapter from "axios-mock-adapter";
import {randomNumberValidResponse} from "../mocks/randomNumberValidResponse";
import app from "../../src/app";
const mock: MockAdapter = new MockAdapter(axios);


describe("Test the root path", () => {
    it("It should response the GET method", (done: DoneCallback) => {
        const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/!*`);
        mock.onGet(url).reply(200, randomNumberValidResponse());

        request(app)
            .get('/stop-average-number').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
