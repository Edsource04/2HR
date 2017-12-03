import { User } from './../../../models/user';
import { Department } from './department';

export class Employee {
    _id?: string;
    firstName: string;
    lastName: string;
    socialId: string;
    birthday: Date;
    address: string;
    telephone: string;
    cellphone: string;
    emloyeeId: number;
    salary: number;
    position: string;
    department: Department;
    hiredDate: Date;
    endDate: Date;
    status: boolean;
    user: User;
    
}
