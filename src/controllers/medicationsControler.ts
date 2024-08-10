import { Request,Response } from "express";
import { ServiceMedications } from "../services/medicatioServices";
import { container } from "tsyringe";


const ServiceMedicationsContain= container.resolve(ServiceMedications)

export class ControllersMedications{
    static async getAllMedications(__:Request,res:Response){
        const medications= await ServiceMedicationsContain.getAllMedications()
        res.json(
                medications
        )
    }

    static async getMedicationsById(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            console.log(id)
            const medications= await ServiceMedicationsContain.findMedicationById(id)
            console.log(medications)
            resp.status(201).json({
                message:"medication finded in your screen",
                medications
            })

        } catch (error) {
            console.log(error)
        }

    }

    static async newMedicationRegister(req:Request,res:Response){
        try{
            const medicationCreated= await ServiceMedicationsContain.createMedication(req.body)
        res.status(201).json(medicationCreated);
        console.log(medicationCreated)
        }catch(error:any){
            res.status(101).json(error)
            throw new Error(error)
        }
    }

    static async medicationUpdated(req:Request,res:Response){
        try {
            const Medication=req.body
        const id:number=parseInt(req.params.id)
        const infoMedication= await ServiceMedicationsContain.updateMedicatons(Medication,id)
        res.status(201).json({
            message:"Medication updated",
            infoMedication
        })    
        } catch (error) {
          console.log(error)  
        }  
    }

    static async MedicationDelete(req:Request,resp:Response){
        try {
            const id:number=parseInt(req.params.id)
            const deleted= await ServiceMedicationsContain.deleteByIdService(id)
            resp.status(201).json({
                message:'successfull',
                deleted
            })   
        } catch (error) {
            console.log(error)
        }  
    }




    
}
