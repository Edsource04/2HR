import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './../../models/employee';

@Component({
  selector: 'hr-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  @Input() employees: Array<Employee>;
  

  constructor() { }

  ngOnInit() {
   
     
  }

  get show(){
    return this.employees.length > 0;
  }

}
