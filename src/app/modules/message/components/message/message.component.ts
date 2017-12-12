import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  sendAMessage: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  compose(){
    this.sendAMessage = true;
  }

}
