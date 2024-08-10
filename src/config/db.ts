import { Sequelize } from 'sequelize-typescript';
import { Tableusers } from '../models/tableUsers';
import env from 'dotenv'
import { medications } from '../models/tableMedications';
import { Patients } from '../models/tablePatients';
env.config()

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Tableusers,medications,Patients] // Añade todos tus modelos aquí
});
export default sequelize