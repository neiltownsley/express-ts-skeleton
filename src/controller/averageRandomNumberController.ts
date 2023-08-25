import {Request, Response} from "express";
import app from "../app";

const averageRandomNumberController = (req: Request, res: Response) => {
  const resp = {hello: 'world'};

  res.send(app.get('bong'));
};

export default averageRandomNumberController;
