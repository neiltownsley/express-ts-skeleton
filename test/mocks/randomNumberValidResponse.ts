import {RandomNumberSuccessfulResponse} from "../../src/service/RandomNumberResponse";

export const randomNumberValidResponse = (): RandomNumberSuccessfulResponse[] => {
    return [{"max": 100, "min": 0, "random": 23, "status": "success"}];
}
