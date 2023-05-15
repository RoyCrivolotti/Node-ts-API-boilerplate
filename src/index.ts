import express, { NextFunction, Request, Response } from 'express';
import { GetEnvironment } from './config/environment';
import { Controller } from './controllers/controller';

const { PORT } = GetEnvironment();

// Creating app
const app = express();

app.get("/api/", Controller.doSomethingController);

app.use('/*', (req, res, next) => {
    res.send('Hello world!');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`);
});
