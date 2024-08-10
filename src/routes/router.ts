import {Router} from 'express'
import { users } from "./userRouter";
import { medications } from './medicationRoutes';
import { login } from './login';
export const router:Router = Router()

router.use('/users',users)
router.use('/auth/',medications)
router.use('/auth',login)