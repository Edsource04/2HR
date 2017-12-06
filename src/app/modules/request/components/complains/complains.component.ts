import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
  
  header: string;
  atDate: Date = new Date();
  description: string;
  submittedBy: string;
  
  constructor() { }

  ngOnInit() {
     var actualUser = JSON.parse(localStorage.getItem('actualUser'));
     this.submittedBy = actualUser.user.username;
  }
  
  sendComplain(){
  
  }

}
