import express, {NextFunction, Request, Response} from "express";
import averageRandomNumberController from "./controller/averageRandomNumberController";

const router = express.Router();
router.get('/some', (req: Request, res:Response, next:NextFunction) => {
    averageRandomNumberController(req, res);
});


export default router;
