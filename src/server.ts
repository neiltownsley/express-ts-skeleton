import {Request, Response} from "express";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server asdsdfsdfdsfas8');
});

app.listen(Number(port), String(host), () => {
    console.log('start')
    console.log(`[server]: Server is running at http://localhost:${port}`);
}).on('error', (err) => {
    /*if( err.code === 'EADDRINUSE'){
        process.exit();
    }*/
});
