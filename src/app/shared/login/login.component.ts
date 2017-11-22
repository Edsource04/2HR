import { User } from './../../models/user';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  username: String = '';
  password: String = '';
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User();
    var loggedUser = JSON.parse(localStorage.getItem('actualUser'));
    if(loggedUser){
      this.user = loggedUser.user as User;
    }
  }

  loginUser(){
  
    var inputUser = new User();
        inputUser.username = this.username;
        inputUser.password = this.password;
      
     this.loginService.loginUser(inputUser).subscribe((response) =>{
       this.user.username = response.user.username;
       this.user.password = response.user.password;
       this.user.role = response.user.role;
       
       localStorage.setItem('actualUser', JSON.stringify({user: response.user, token: response.token}));

       console.log(this.user);
  
       if(this.loginService.getUserLoggedIn()){
           if(this.user.role == 'admin'){
              //router to admin dashboard for now let's redirecto to home
              this.router.navigate(['/admin/admin-dashboard']);
           }else{
            this.router.navigate(['/user/user-dashboard']);
           }
           
       }

     });
   
  }

}
