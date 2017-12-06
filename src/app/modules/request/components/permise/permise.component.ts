import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-permise',
  templateUrl: './permise.component.html',
  styleUrls: ['./permise.component.css']
})
export class PermiseComponent implements OnInit {
   
  empNumber: string;
  submittedBy: string;
  fullname: string;
  manager: string;
  department: string;
  description: string;
  leaveDate: Date;
  
  
  constructor() { }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.submittedBy = actualUser.user.username;
  }
  
  sendRequest(){
    
  }

}
