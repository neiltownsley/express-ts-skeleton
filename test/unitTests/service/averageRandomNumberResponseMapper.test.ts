import { averageRandomNumberResponseMapper } from '../../../src/service/averageRandomNumberResponseMapper';
import { AverageRandomNumberResponse } from '../../../src/service/AverageRandomNumberResponse';
import { averageRandomNumberMockResponse } from '../../mocks/averageRandomNumberMockResponse';

describe('averageRandomNumberResponseMapper', (): void => {
  it('When averageRandomNumberResponseMapper is called with valid number list, should return map of average number json response', async (): Promise<void> => {
    const randomNumberListPromise: Promise<number[]> = new Promise(
      (resolve): void => {
        resolve([29, 46, 57, 65, 48, 39, 27, 64]);
      },
    );
    const averageRandomNumberResponse: AverageRandomNumberResponse =
      await averageRandomNumberResponseMapper(randomNumberListPromise);
    expect(averageRandomNumberResponse).toEqual(
      averageRandomNumberMockResponse(),
    );
  });
});
