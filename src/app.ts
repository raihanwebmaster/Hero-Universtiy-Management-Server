/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlware/globalErrorHandler';
import notFound from './app/middlware/notFound';
import router from './app/router';
import cookieParser from 'cookie-parser';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173' , credentials:  true }));
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use(globalErrorHandler);

//Not found
app.use(notFound);

export default app;
