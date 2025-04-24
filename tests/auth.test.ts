import request from 'supertest';
import app from '../src/app';

const seededUserEmail = 'authuser@example.com';
const seededUserPassword = 'testpass123';

beforeAll(async () => {
  await request(app).post('/api/v1/users').send({
    fname: 'Auth',
    lname: 'User',
    email: seededUserEmail,
    password: seededUserPassword,
  });
});

describe('POST /api/v1/auth/login', () => {
  it('should login and return a token', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({
      email: seededUserEmail,
      password: seededUserPassword,
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toHaveProperty('email', seededUserEmail);
  });

  it('should fail with wrong password', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({
      email: seededUserEmail,
      password: 'wrongpass',
    });

    expect(res.status).toBe(401);
  });

  it('should fail with invalid email', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({
      email: 'notfound@example.com',
      password: seededUserPassword,
    });

    expect(res.status).toBe(401);
  });
});
