import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hr-vacation-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class VacationFormComponent implements OnInit {
  
  fullname: string;
  manager: string;
  leaveDate: Date;
  empNumber: string;
  description: string;

  constructor() { }

  ngOnInit() {
  
  }

  sendForm(){

  }

}
