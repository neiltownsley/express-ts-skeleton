import dotenv from 'dotenv';
import app from './app';
import pino from 'pino';
import { randomAverageNumberPath } from './configurationConstants';

type ServerError = {
  code: string;
};

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

app
  .listen(Number(port), String(host), (): void => {
    pino().info(
      `Server is running at http://${host}:${port}${randomAverageNumberPath}`,
    );
  })
  .on('error', (err: ServerError): void => {
    console.log(err.code);
    pino().error(err);
    if (err.code === 'EADDRINUSE') {
      process.exit();
    }
  });
