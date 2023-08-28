export type RandomNumberSuccessfulResponse = {
  status: string;
  min: number;
  max: number;
  random: number;
};

export type RandomNumberErrorResponse = {
  status: string;
  code: string;
  reason: string;
};

export type RandomNumberResponse =
  | RandomNumberSuccessfulResponse[]
  | RandomNumberErrorResponse[];
