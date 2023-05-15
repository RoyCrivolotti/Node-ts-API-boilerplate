import request from 'supertest';
import express from 'express';
import { Controller } from 'controllers/controller';

const app = express();
app.get("/api/", Controller.doSomethingController);

test('GET /api/ - success', async () => {
    const result = await request(app)
        .get('/api/')
        .query({ id: '123' });

    expect(result.text).toEqual('This is a response! Your ID is 123');
    expect(result.status).toEqual(200);
});

test('GET /api/ - failure', async () => {
    const result = await request(app)
        .get('/api/')
        .query({});

    expect(result.text).toEqual('Please input an ID');
    expect(result.status).toEqual(400);
});
