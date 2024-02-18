import { jwt } from "jsonwebtoken";
import {errorHandler} from './error.js';

export const verifyToken = (req, res, next) => {
    //   console.log('verify token middleware called');
    const token =req.cookie.access_token;

    if  (!token) return next(errorHandler(401,'Access  Denied, no token provided'));

    jwt.verify (token, process.env.JWT_SECRET ,(err, user)=>{
        if(err) return next(errorHandler(403,"Invalid Token"));

        req.user = user;
        next();
    })

}