import express, { Express} from 'express';
import router from "./router";
import {recursiveRandomNumberHandler} from "./service/recursiveRandomNumberHandler";
import {randomNumberHandlerKey} from "./configurationConstants";
const app: Express = express();

recursiveRandomNumberHandler();


app.use('/', router);

export default app;

