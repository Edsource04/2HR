import { User } from './../../../models/user';
import { Department } from './../models/department';
import { Injectable } from '@angular/core';
import { Employee } from './../models/employee';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { tap, map, catchError, filter } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
  
  user: User =  new User();
  employees: Array<Employee> = [
    {
      _id: 'EmpAAA1',
      firstName: 'Jose Ramon',
      lastName: 'De los Santos',
      socialId: '00145789623',
      birthday: new Date(1984, 5, 10),
      address: 'Corazon de Jesus #35, Los Cielos',
      telephone: '8098547245',
      cellphone: '8495632147',
      emloyeeId: 437500,
      salary: 15000,
      position: 'Concerge',
      department: {
        _id: 'dep-01',
        name: 'Servicios',
        manager: 'Jose Lopez',
        headCount: 14
      },
      hiredDate: new Date(2014, 29, 4),
      endDate: null,
      status: true,
      user: this.user
    }
  ];

  constructor() { 
    this.user._id = 'user-05';
    this.user.username = 'jose.ramon@hotmail.com';
    this.user.password = '@#$%#$%^&&%$%^#$##-3107618^!^^&!%';
    this.user.registerDate = new Date(2014, 15, 3);
  }

  getEmployees():Observable<Employee[]>{
    let employees = Observable.create((observer) => {
              setTimeout(()=>{
                observer.next(this.employees);
                console.log('Employees sent');
                observer.complete();
          }, 2000);
    });

    return employees;
  }

  getEmployee(empp: string): Observable<Employee[]>{
    if(!empp.trim()){
      return of([]);
    }
       console.log(this.getEmployees());
    return this.getEmployees().map(emp => emp.filter( e => e._id === empp));

  }

}
