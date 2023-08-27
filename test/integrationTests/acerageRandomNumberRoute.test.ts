import request from "supertest";
import DoneCallback = jest.DoneCallback;
import axios, {AxiosError, AxiosResponse} from "axios";
import MockAdapter from "axios-mock-adapter";
import {randomNumberValidResponse} from "../mocks/randomNumberValidResponse";
import app from "../../src/app";
import {averageRandomNumberPath, externalRandomNumberPath} from "../../src/configurationConstants";
const mock: MockAdapter = new MockAdapter(axios);

const url: RegExp = new RegExp(`${externalRandomNumberPath}/!*`);
mock.onGet(url).reply(200, randomNumberValidResponse());
describe("Test the root path", () => {
    it("It should response the GET method", (done: DoneCallback) => {


        request(app)
            .get(averageRandomNumberPath).then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
