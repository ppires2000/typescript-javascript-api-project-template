import request from 'supertest';
import app from '../src/app';
it('should create a new user', async () => {
  const uniqueEmail = `jane_${Date.now()}@example.com`;

  const res = await request(app).post('/api/v1/users').send({
    fname: 'Jane',
    lname: 'Doe',
    email: uniqueEmail,
    password: 'secure123',
  });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty('email', uniqueEmail);
});
