const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

// If using the lib/utils/__mocks__/github.js file:
// jest.mock('../lib/utils/github.js');

jest.mock('../lib/utils/github.js', () => {
  return {
    exchangeCodeForToken: async (code) => code,
    getUserProfile: async (_token) => ({
      username: 'test_user',
      photoUrl: 'https://example.com/photo.png',
    }),
  };
});

describe('github-oauth routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a tweet via POST', async () => {
    const agent = request.agent(app);

    await agent.get('/api/v1/auth/login/callback?code=123123');

    return agent
      .post('/api/v1/tweets')
      .send({ text: 'Hello this is some text' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          text: 'Hello this is some text',
          username: 'test_user',
        });
      });
  });
});
