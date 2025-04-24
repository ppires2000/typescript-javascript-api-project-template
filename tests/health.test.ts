import request from 'supertest';
import { createHealthApp } from './utils/createHealthApp';

const app = createHealthApp();

describe('GET /api/v1/health', () => {
  it('should return 200 with health status info', async () => {
    const res = await request(app).get('/api/v1/health');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('uptime');
    expect(typeof res.body.uptime).toBe('number');
    expect(res.body).toHaveProperty('timestamp');
    expect(typeof res.body.timestamp).toBe('number');
  });
});
