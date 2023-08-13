import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        if (typeof req.headers.authorization !== 'undefined') {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({message: "Unauthorized"});
            }
            let decoded;
            if (typeof process.env.JWT_SECRET_KEY === 'string') {
                decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            }
            req.query.user = decoded;
            next();
        } else {
            return res.status(401).json({message: "Unauthorized"})
        }
    } catch (error) {
        res.status(401).json({message: "Unauthorized"});
    }
};