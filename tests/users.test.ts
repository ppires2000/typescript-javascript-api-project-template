import request from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/database/config/database';

let testUserId: string;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await request(app)
    .post('/api/v1/users')
    .send({
      fname: 'Test',
      lname: 'User',
      email: 'testuser@example.com',
      password: 'password123',
    })
    .then(res => {
      testUserId = res.body.id;
    });
});

describe('GET /api/v1/users', () => {
  it('should return an array of users', async () => {
    const res = await request(app).get('/api/v1/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('GET /api/v1/users/:id', () => {
  it('should return a user by ID', async () => {
    const res = await request(app).get(`/api/v1/users/${testUserId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email', 'testuser@example.com');
  });

  it('should return 404 if user not found', async () => {
    const res = await request(app).get('/api/v1/users/123e4567-e89b-12d3-a456-426614174000');
    expect(res.status).toBe(404);
  });
});

describe('POST /api/v1/users', () => {
  it('should create a new user', async () => {
    const res = await request(app).post('/api/v1/users').send({
      fname: 'Jane',
      lname: 'Doe',
      email: 'jane@example.com',
      password: 'secure123',
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('email', 'jane@example.com');
  });

  it('should return 409 for duplicate email', async () => {
    const res = await request(app).post('/api/v1/users').send({
      fname: 'Jane',
      lname: 'Doe',
      email: 'jane@example.com',
      password: 'secure123',
    });
    expect(res.status).toBe(409);
  });
});

describe('PATCH /api/v1/users/:id', () => {
  it('should update user info', async () => {
    const res = await request(app).patch(`/api/v1/users/${testUserId}`).send({
      lname: 'Updated',
    });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('lname', 'Updated');
  });
});

describe('DELETE /api/v1/users/:id', () => {
  it('should delete the user', async () => {
    const res = await request(app).delete(`/api/v1/users/${testUserId}`);
    expect(res.status).toBe(204);
  });

  it('should return 404 when user is already deleted', async () => {
    const res = await request(app).get(`/api/v1/users/${testUserId}`);
    expect(res.status).toBe(404);
  });
});

afterAll(async () => {
  await sequelize.close();
});
