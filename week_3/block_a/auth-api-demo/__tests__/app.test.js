const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

describe('auth-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('signs up a user via POST', async () => {
    const res = await request(app)
      .post('/api/v1/auth/signup')
      .send({ username: 'ruby', password: 'ilovechicken' });

    expect(res.body).toEqual({ id: expect.any(String), username: 'ruby' });
  });

  it('signs in an existing user', async () => {
    const user = await UserService.create({
      username: 'ruby',
      password: 'ilovechicken',
    });

    const res = await request(app)
      .post('/api/v1/auth/signin')
      .send({ username: 'ruby', password: 'ilovechicken' });

    expect(res.body).toEqual({
      message: 'Signed in successfully!',
      user,
    });
  });

  it('sets and retrieves the currently signed in user', async () => {
    const agent = request.agent(app);

    await UserService.create({
      username: 'ruby',
      password: 'ilovechicken',
    });

    await agent
      .post('/api/v1/auth/signin')
      .send({ username: 'ruby', password: 'ilovechicken' });

    const res = await agent.get('/api/v1/auth/me');

    expect(res.body).toEqual({
      id: expect.any(String),
      username: 'ruby',
      exp: expect.any(Number),
      iat: expect.any(Number),
    });
  });

  it('protects routes using authenticate middleware', async () => {
    // Create an agent for storing cookies on the requests in this test
    const agent = request.agent(app);

    // Create a user to sign in with
    await UserService.create({
      username: 'ruby',
      password: 'ilovechicken',
    });

    // Try hitting the protected endpoint to ensure it's indeed protected
    let res = await agent.get('/api/v1/auth/private');
    expect(res.status).toEqual(401);

    // Then, sign in and make the same request
    await agent
      .post('/api/v1/auth/signin')
      .send({ username: 'ruby', password: 'ilovechicken' });
    res = await agent.get('/api/v1/auth/private');

    expect(res.body).toEqual({
      message: 'Top secret! You should only see this if you are logged in',
    });
  });

  it('allows the `admin` user to view a list of posts', async () => {
    const agent = request.agent(app);

    await UserService.create({
      username: 'admin',
      password: 'admin',
    });

    await UserService.create({
      username: 'ruby',
      password: 'ilovechicken',
    });

    // Test authentication for the endpoint.
    // No user signed in:
    let res = await agent.get('/api/v1/posts');
    // Should get an "unauthenticated" status:
    expect(res.status).toEqual(401);

    // Authenticate a user that isn't authorized:
    await agent
      .post('/api/v1/auth/signin')
      .send({ username: 'ruby', password: 'ilovechicken' });
    res = await agent.get('/api/v1/posts');
    // Should get an "unauthorized" status:
    expect(res.status).toEqual(403);

    // Authenticate a user that is authorized:
    await agent
      .post('/api/v1/auth/signin')
      .send({ username: 'admin', password: 'admin' });
    res = await agent.get('/api/v1/posts');
    // Should get a successful response:
    expect(res.status).toEqual(200);
  });
});
