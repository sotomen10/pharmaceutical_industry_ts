import bcrypt from "bcryptjs"
import env from "dotenv"
import { injectable, inject } from "tsyringe"
import { userRepository } from "../repositories/userRepository"
import jwt from "jsonwebtoken"

env.config()
@injectable()
export class Security {
    constructor(@inject(userRepository) private userRepository: userRepository) { }


    async encriptPassword(password: string): Promise<string> {
        const azar = await bcrypt.genSalt(10)// me genera numeros al azar para que la contraseña sea indecifrable
        return await bcrypt.hash(password, azar)

    }

    async generateToken(data:string){
        // const options: SignOptions = {
        //     algorithm: 'HS256',
        //     expiresIn: '1h',+
        //     audience: 'example.com',
        //     issuer: 'your-app',
        //     subject: 'user-authentication'
        //   };
            const token= jwt.sign({data},`${process.env.SECRET_KEY_ADMIN}`||"generica",{
                expiresIn:60*60*2
            })
            return token
    }

    async authorize(email: string, passwordBody: string): Promise<boolean> {
        try {
            // Busca el usuario por email
            const user = await this.userRepository.findByEmail(email);
            // Verifica si el usuario existe
            if (!user) {
                return false;
            }
            // Compara la contraseña proporcionada con el hash almacenado
            const isMatch = await bcrypt.compare(passwordBody, user.password);
            return isMatch;
        } catch (error) {
            console.error('Error during authorization:', error);
            return false;
        }
    }
}



