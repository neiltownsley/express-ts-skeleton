import dotenv from 'dotenv';
import app from "./app";

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;
//lsof -i -P | grep LISTEN | grep :$PORT

app.listen(Number(port), String(host), () => {
    //console.log(`[server]: Server is running at http://localhost:${port}`);
}).on('error', (err: any):void => {
    console.log(err.code)
    if( err.code === 'EADDRINUSE'){
        process.exit();
    }
});

