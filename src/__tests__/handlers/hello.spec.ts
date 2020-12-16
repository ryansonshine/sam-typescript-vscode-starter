import { handler } from '../../handlers/hello';

describe('hello', () => {
  it('should resolve with a response', async () => {
    // @ts-expect-error Passing in invalid argument for test purposes
    const result = await handler({});
    expect(result).toBeTruthy();
  });
});
