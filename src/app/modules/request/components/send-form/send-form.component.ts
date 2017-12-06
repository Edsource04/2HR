import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.css']
})
export class SendFormComponent implements OnInit {
   
  sendBy: string;

  constructor() { }

  ngOnInit() {
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    this.sendBy = actualUser.user.username;
  }

}
