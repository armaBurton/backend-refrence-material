const request = require('supertest');
const app = require('../lib/app');

describe('http-demo routes', () => {
  it('responds with a dog in JSON format', async () => {
    const res = await request(app).get('/dog.json');

    expect(res.body).toEqual({ name: 'Ruby', favoriteTreat: 'Chicken' });
  });
});
