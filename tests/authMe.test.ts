import request from 'supertest';
import jwt, { SignOptions } from 'jsonwebtoken';
import app from '../src/app';

describe('GET /api/v1/auth/me', () => {
  const userPayload = { id: 'test-id', email: 'test@example.com' };
  const token = jwt.sign(userPayload, process.env.JWT_SECRET ?? '', {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  } as SignOptions);

  it('should return 200 and the user payload with valid token', async () => {
    const res = await request(app).get('/api/v1/auth/me').set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user).toMatchObject(userPayload);
  });

  it('should return 401 if no token is provided', async () => {
    const res = await request(app).get('/api/v1/auth/me');
    expect(res.status).toBe(401);
  });

  it('should return 403 if token is invalid', async () => {
    const res = await request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', 'Bearer invalid.token.here');

    expect(res.status).toBe(403);
  });
});
