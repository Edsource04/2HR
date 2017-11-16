import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  constructor(public loginService: UserService) { 
    
  }

  ngOnInit() {
    
  }

  isAdmin():boolean{
    var user = this.loginService.getActualUser();
    return  (user.role == 'admin' || user.role == 'employee') ? true : false;
    
  }

}
