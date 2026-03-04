const request = require('supertest');
const app = require('./server');

describe('GET /calculator/add', () => {
    it('should return the sum of two numbers', async () => {
        const res = await request(app).get('/calculator/add?a=5&b=10');
        expect(res.statusCode).toEqual(200);
        expect(res.body.result).toBe(15);
    });
});