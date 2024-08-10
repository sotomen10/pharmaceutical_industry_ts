
import { Tableusers } from "../models/tableUsers";
import { Patients } from "../models/tablePatients";
import { injectable } from 'tsyringe';



@injectable()
export class userRepository{
    async finAll(){
        return await Tableusers.findAll()
    }

    async findByEmail(email:string){
        return await Tableusers.findOne({
            where:{
                email:email
            }
        })
        
    }


    async findById(id:number){
        try {
            const wanted= await Tableusers.findByPk(id)
            return wanted
        } catch (error:any) {
            throw new Error(error.message)
        }
        
    }
    async createdNewUser(user: Partial<Tableusers>){
        let tableCreated:any;
        try{
            if(user.position==="paciente"){
               tableCreated=await Patients.create(user)
               
            }
            return await Tableusers.create(user)

        }catch(error:any){
            console.log('ah ocurrido un error',error)
        }
    }

     async updateUserById(userupdated:Partial<Tableusers>,id:number){
        try {
            const update= await Tableusers.update(userupdated,{
                where:{
                    id:id
                }
            })
            return update
            
        } catch (error) {
            console.log(error)
        }

    }

    async deleteUserById(id:number){
        try {
            await Tableusers.destroy({
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

}



