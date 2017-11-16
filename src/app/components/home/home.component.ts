import { Router } from '@angular/router';
import { User } from './../../models/user';
import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'hr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username?: String;
  password?: String;
  confirmPass?: String;
  userExists: boolean;
  isAdmin: boolean;
  @Output() sendRegisteredUser = new EventEmitter<User>();
  registeredUser: User;

  constructor(public loginService: LoginService, private el: ElementRef) { }

  ngOnInit() {
    this.userExists = false;
  }
 
  passwordMatch():boolean{
    return this.confirmPass == this.password ? true : false;
  }
  getPass(): String{
     return this.password;
  }

  registerUser(){
          var user = new User();
          user.username = this.username.toLowerCase();
          user.password = this.password;
          user.role = 'user';
          this.loginService.registerUser(user).subscribe((response) => {
            this.registeredUser = response.user as User;

          if(!this.registeredUser.username){
             this.userExists = true;
          }else{
            localStorage.setItem('actualUser', JSON.stringify({user: response.user, token: response.token}));
            var button = this.el.nativeElement.querySelector('#dismissButton');
            button.click();
            this.registeredUser = user;
            //navigate to userDashboard.
            
          }

          
        });
  }


}
