import { S3 } from 'aws-sdk';

const s3 = new S3({});

describe('Sample integration test', () => {
  it('should work', async () => {
    const result = await s3.listBuckets().promise();

    expect(result).toBeTruthy();
  });
});
