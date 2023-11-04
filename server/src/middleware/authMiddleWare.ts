import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction): void => {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        if (req.headers.authorization) {
            const [,token] = req.headers.authorization.split(" ");
            if (!token) {
                res.status(401).json({message: "Unauthorized"});
            }
            let decoded;
            if (typeof process.env.JWT_SECRET_KEY === 'string') {
                decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            }
            req.user = decoded;
            next();
        } else {
            res.status(401).json({message: "Unauthorized"})
        }
    } catch (error) {
        res.status(401).json({message: "Unauthorized"});
    }
};