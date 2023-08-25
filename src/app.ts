import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import randomNumberHandler from "./service/randomNumberHandler";
const average = array => array.reduce((a, b) => a + b) / array.length;
//console.log(average([1,2,3,4,5,6,7]));

const app: Express = express();

app.set('randomNumberHandler',  randomNumberHandler())
const randomNumber = app.get('randomNumberHandler');

randomNumber.then((res) => {
  console.log(res);
})

console.log('hererererer->>>');
export default app;

