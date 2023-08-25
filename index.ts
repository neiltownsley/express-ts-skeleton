import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import someFunk from "./service/someFunk";
const average = array => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5,6,7]));

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.set('randomNumberHandler', )

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdsdfsdfdsfas8' + someFunk());
});

app.listen(Number(port), host, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}).on('error', (err) => {
  if( err.code === 'EADDRINUSE'){
    process.exit();
  }
});
