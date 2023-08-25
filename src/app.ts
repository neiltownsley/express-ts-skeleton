import express, { Express} from 'express';
import recursiveRandomNumberHandler from "./service/recursiveRandomNumberHandler";
import router from "./router";
const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;
console.log(average([1,2,3,4,5,6,7]));

const app: Express = express();
app.set('randomNumberHandler',  recursiveRandomNumberHandler());
app.use('/', router);


export default app;

