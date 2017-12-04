import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'hr-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  @Input() employees: Array<Employee>;
  

  constructor(private router: Router) { }

  ngOnInit() {
   
     
  }

  get show(){
    return this.employees.length > 0;
  }

  addEmployee(){
    this.router.navigate(['admin', 'admin-dashboard','employees','add-employee',{outlets: {admin: null}}]);
  }

}
