const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('quotable routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a user profile with a random quote', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({ username: 'ruby' });

    expect(res.body).toEqual({
      id: expect.any(String),
      username: 'ruby',
      quote: expect.any(String),
    });
  });
});
