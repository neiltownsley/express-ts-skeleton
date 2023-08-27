import dotenv from 'dotenv';
import app from "./app";
import * as child_process from "child_process";

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
//lsof -i -P | grep LISTEN | grep :$PORT

console.log(Number(port), String(host))
app.listen(Number(port), String(host), () => {
    //console.log(`[server]: Server is running at http://localhost:${port}`);
});

