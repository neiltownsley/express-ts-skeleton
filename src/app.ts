import express, {Express, Request, Response} from 'express';
import {averageRandomNumberController} from "./controller/averageRandomNumberController";
import {recursiveRandomNumberHandler} from "./service/recursiveRandomNumberHandler";
const app: Express = express();

const randomNumberList: Promise<number[]> = recursiveRandomNumberHandler()

app.get('/stop-average-number', async (req: Request, res:Response): Promise<void> => {
    await averageRandomNumberController(req, res, randomNumberList);
});

export default app;

