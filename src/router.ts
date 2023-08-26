import express, {NextFunction, Request, Response, Router} from "express";
import {averageRandomNumberController} from "./controller/averageRandomNumberController";

const router: Router = express.Router();
router.get('/average-number', (req: Request, res:Response, next:NextFunction) => {
    averageRandomNumberController(req, res);
});


export default router;
