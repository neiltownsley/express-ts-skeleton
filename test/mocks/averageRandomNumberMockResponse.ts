import { AverageRandomNumberResponse } from "../../src/service/AverageRandomNumberResponse";

export const averageRandomNumberMockResponse =
  (): AverageRandomNumberResponse => {
    return {
      randomNumbers: [29, 46, 57, 65, 48, 39, 27, 64],
      averageNumber: 46.875,
      averageNumberFixed: "47",
    };
  };
