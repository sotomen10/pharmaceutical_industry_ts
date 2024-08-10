import { container } from "tsyringe";
import {UserService} from "../services/userServices";
import { Request, Response } from "express";
import { Security } from "../services/security";

const userServices = container.resolve(UserService)
const SecurityService= container.resolve(Security)
export class UserController{
   static async getAllUsers(__:Request,res:Response){
        const users= await userServices.getAllUsers()
        res.json(
            users
        )
    }

    static async getUserById(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const user= await userServices.findUserById(id)
            resp.status(201).json({
                message:"user finded in your screen",
                user
            })

        } catch (error) {
            console.log(error)
        }

    }
    
    static async newUserRegister(req:Request,res:Response){
        try{
            let cifrated= await SecurityService.encriptPassword(req.body.password)
            const userCreated= await userServices.createUser({
                ...req.body,
                password:cifrated
            })
        res.status(201).json(userCreated);
        console.log(userCreated)
        }catch(error:any){
            res.status(101).json(error)
            throw new Error(error)
        }
    }
    static async userUpdated(req:Request,res:Response){
        try {
            const user=req.body
        const id:number=parseInt(req.params.id)
        const infoUser= await userServices.updateUser(user,id)
        res.status(201).json({
            message:"user updated",
            infoUser
        })    
        } catch (error) {
          console.log(error)  
        }  
    }

    static async userDelete(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const deleted= await userServices.deleteByIdService(id)
            resp.status(201).json({
                message:'successfull',
                deleted

            })   
        } catch (error) {
            console.log(error)
        }
        
    }

        
        
    


}