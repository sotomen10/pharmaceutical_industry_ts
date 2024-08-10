import {UserService} from '../services/userServices';
import { container } from 'tsyringe';
import {userRepository} from '../repositories/userRepository';
import { ServiceMedications } from '../services/medicatioServices';
import { RepositoryMedications } from '../repositories/medicationRepository';

container.registerSingleton<userRepository>(userRepository);
container.registerSingleton<UserService>(UserService);


container.registerSingleton<ServiceMedications>(ServiceMedications);
container.registerSingleton<RepositoryMedications>(RepositoryMedications);