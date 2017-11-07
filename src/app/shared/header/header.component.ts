import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit, Input} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'hr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Input() user?: User;
   @Input() isLoggedIn?: boolean;
   profile: String;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  
    if(!this.isLoggedIn){
      this.isLoggedIn = this.loginService.getUserLoggedIn();
      if(this.isLoggedIn){
        this.user = new User();
        this.user = this.loginService.user;
        this.profile = 'profile/'+this.user._id;
      }
    }
    
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

  goToProfile(){
    this.router.navigate(['/profile/'+this.user._id]);
  }

}
