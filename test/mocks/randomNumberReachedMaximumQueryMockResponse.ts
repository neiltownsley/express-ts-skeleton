import { RandomNumberErrorResponse } from "../../src/service/RandomNumberResponse";

export const randomNumberReachedMaximumQueryMockResponse =
  (): RandomNumberErrorResponse[] => {
    return [
      {
        status: "error",
        code: "5",
        reason:
          "Reached maximum queries in the last second. To remove limitation, please get our PRO service at http://www.csrng.net",
      },
    ];
  };
