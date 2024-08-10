import { Router } from "express";
import { ControllersMedications } from "../controllers/medicationsControler";
import { tokenValidation } from "../middleware/validationToken";

export const medications=Router()


medications.get('/medications',tokenValidation,ControllersMedications.getAllMedications)
medications.get('/medications/:id',ControllersMedications.getMedicationsById)
medications.post('/medications',ControllersMedications.newMedicationRegister)
medications.put('/medications/:id',ControllersMedications.medicationUpdated)
medications.delete('/medications/:id',ControllersMedications.MedicationDelete)
