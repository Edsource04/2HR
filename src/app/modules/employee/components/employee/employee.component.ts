import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'hr-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees: Array<Employee> = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
   this.empService.getEmployees().subscribe(emps => {
     this.employees = emps;
   });
   
  }

}
