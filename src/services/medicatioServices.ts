import { RepositoryMedications } from "../repositories/medicationRepository";
import { inject, injectable } from "tsyringe";
import { medications } from "../models/tableMedications";

@injectable()

export class ServiceMedications{
    constructor(@inject(RepositoryMedications) private RepositoryMedications:RepositoryMedications){}

    async getAllMedications(){
        return await this.RepositoryMedications.finAll()
    }
    async findMedicationById(id:number){
        try {
          return await this.RepositoryMedications.findById(id)
        } catch (error) {
            console.log(error)
        }
    }

    async createMedication(medication:Partial<medications>) {
        return await this.RepositoryMedications.createdNewMedication(medication);
      }

      async updateMedicatons(user: Partial<medications>, id: number): Promise<medications | null> {
        try {
          const affectedCount:any = await this.updateMedicatons(user, id);
    
          if (affectedCount === 0) {
            console.log('No se encontró el usuario o no se realizaron cambios.');
            return null;
          }
    
          // Buscar el usuario actualizado para obtener los datos actualizados
          const updatedMedications = await this.RepositoryMedications.findById(id);
          if (updatedMedications) {
            console.log('Datos actualizados:', updatedMedications.get({ plain: true }));
          }
          return updatedMedications;
        } catch (error) {
          console.log(error);
          return null;
        }
      }

      async deleteByIdService(id:number){
        const wanted= await this.findMedicationById(id)
        if(wanted){
            await this.RepositoryMedications.deleteMedicationById(id)
            return wanted
        }else{
            return "medicamento no encontrado no se puede eliminar"
        }
      }

}