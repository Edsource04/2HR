import { Employee } from './../../models/employee';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'hr-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee = {};

  departments: Array<string> = ['Servicios', 'Administracion', 'Mantenimiento'];
  department: string = '';
  seletedDepartemnt: string;
  today: Date = new Date();

  constructor(private el: ElementRef, private location: Location) { }

  ngOnInit() {
  }

  selectDepartement(department: string){
    this.seletedDepartemnt = department;
  }

  addEmployee(){
     this.el.nativeElement.querySelector('#openModalButton').click();
  }

  goBack(){
    this.location.back();
  }

}
