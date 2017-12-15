import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../employee/models/employee';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'hr-strike-form',
  templateUrl: './strike-form.component.html',
  styleUrls: ['./strike-form.component.css']
})
export class StrikeFormComponent implements OnInit{
  
  @Input('data') employee?: Employee;
  dateIn: Date = new Date();
  strikeLevel: string;
  strikeType: string;
  description: string;

  constructor() { }

  ngOnInit() {
    
  }

  get fullname(){
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  submitStrike(){

  }

  selectL(value: string){

  }

  selectT(value: string){
    
  }

}
