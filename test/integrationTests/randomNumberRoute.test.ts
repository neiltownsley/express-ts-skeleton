import request from "supertest";
import server from "../../src/server";
import app from "./../../src/app";
import DoneCallback = jest.DoneCallback;
import {randomNumberValidResponse} from "../mocks/randomNumberValidResponse";
import axios, {AxiosError, AxiosResponse} from "axios";
/*import MockAdapter from "axios-mock-adapter";
const mock: MockAdapter = new MockAdapter(axios);*/
describe("Test the root path", () => {
    it("It should response the GET method", (done: DoneCallback) => {
       /* const randomNumberPath = "/csrng";
        const url: RegExp = new RegExp(`${randomNumberPath}/!*`);
        mock.onGet(url).reply(200, randomNumberValidResponse());*/

        request(server)
            .get('/average-number')
            .set('Accept', 'application/json')
            .expect(200);
        done();

    });
});
