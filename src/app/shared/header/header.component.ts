import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'hr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Input() user?: User = new User();
   @Input() isLoggedIn?: boolean;
   profile: String;
   dashboard: string;
   @Input() isAllowed: boolean;

  constructor(private loginService: LoginService, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    console.log(this.isAllowed);
    if(!this.isLoggedIn){
      this.isLoggedIn = this.loginService.getUserLoggedIn();
      if(this.isLoggedIn){
        this.user = new User();
        this.user = this.loginService.user;
        this.profile = 'profile/'+this.user._id;
        this.isAllowed = (this.user.role == 'admin' || this.user.role == 'employee') ? true : false;
      }
    }
    
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.isAllowed = false;
    this.router.navigate(['/']);
  }

  goToProfile(){
    this.router.navigate(['/profile/'+this.user._id]);
  }

}
