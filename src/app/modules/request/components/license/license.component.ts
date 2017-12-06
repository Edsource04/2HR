import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  
  empNumber: string;
  submittedBy: string;
  fullname: string;
  manager: string;
  department: string;
  attachment: File;
  description: string;
  atDate: Date = new Date();
  
  constructor() { }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.submittedBy = actualUser.user.username;
  }
 
  sendLicense(){
  
  }
}
