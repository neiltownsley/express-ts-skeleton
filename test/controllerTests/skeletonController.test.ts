import request from 'supertest';
import app from '../../src/app';
import { skeletonRoute } from '../../src/configurationConstants';
import { skeletonMockResponse } from '../mocks/skeletonMockResponse';
describe('skeletonRoute', (): void => {
  it('When skeletonRoute is called, should return skeleton response', async (): Promise<void> => {
    const response: request.Response = await request(app).get(skeletonRoute);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(skeletonMockResponse());
  });
});
