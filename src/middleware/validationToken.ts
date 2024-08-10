import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "dotenv"

env.config
export const tokenValidation=(req:Request,res:Response,next:NextFunction)=>{
    const token= req.header('authorization')
    if(!token) return res.status(500).json('acces denied')
        jwt.verify(token,`${process.env.SECRET_KEY_ADMIN}`)
        next()

}


