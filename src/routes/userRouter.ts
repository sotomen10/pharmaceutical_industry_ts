import { Router } from "express";
import { UserController } from "../controllers/usersControllers";

export const users=Router()

users.get('/',UserController.getAllUsers)
users.get('/:id',UserController.getUserById)
users.post('/',UserController.newUserRegister)
users.put('/:id',UserController.userUpdated)
users.delete('/:id', UserController.userDelete)

