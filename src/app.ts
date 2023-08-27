import express, {Express, NextFunction, Request, Response} from 'express';
import {averageRandomNumberController} from "./controller/averageRandomNumberController";
import {recursiveRandomNumberHandler} from "./service/recursiveRandomNumberHandler";
import {averageNumberUrl} from "./configurationConstants";
const app: Express = express();

global.randomNumberRetrieval = true;
const randomNumberList: Promise<number[]> = recursiveRandomNumberHandler()

app.get('/stop-average-number', async (req: Request, res:Response): Promise<void> => {
    global.randomNumberRetrieval = false;
    await averageRandomNumberController(req, res, randomNumberList);
});

app.get('/start-average-number', async (req: Request, res:Response): Promise<void> => {
    global.randomNumberRetrieval = true;
    res.send({randomNumberRetrieval, averageNumberUrl});
    await recursiveRandomNumberHandler()
});

export default app;

