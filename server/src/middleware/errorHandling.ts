import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/apiError";

export const errorHandling = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    } else return res.status(500).json({ message: "Unpredictable Error" });
}