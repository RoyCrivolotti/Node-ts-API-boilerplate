import { NextFunction, Request, Response } from "express"

async function doSomethingController(req: Request, res: Response, next: NextFunction): Promise<Response> {
    if (!req.query.id) {
        return res.status(400).send("Please input an ID")
    }

    await setTimeout(() => { }, 2000);
    return res.status(200).send(`This is a response! Your ID is ${req.query.id}`);
}

export const Controller = {
    doSomethingController,
};
