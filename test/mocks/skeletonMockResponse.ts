type skeletonResponse = {
  hello: string;
};

export const skeletonMockResponse = (): skeletonResponse => {
  return { hello: 'world' };
};
