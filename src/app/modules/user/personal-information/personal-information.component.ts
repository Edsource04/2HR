import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { UserService } from '../user.service';

@Component({
  selector: 'hr-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  
  currentPosition: string;
  telephone: string;
  address: string;
  email: string;
  cellphone: string;
  profile: Profile;
  isEditable: boolean;

  constructor(private router: Router, private userService: UserService, private el: ElementRef) { }

  ngOnInit() {
    this.profile = new Profile();
    var actualUser = JSON.parse(localStorage.getItem('actualUser'));
    if(actualUser){
          this.email = actualUser.user.username;
          this.userService.getProfile(actualUser.user._id).subscribe((profile) =>{
                 this.profile = profile;
                 this.address = profile.address as string;
                 this.cellphone = profile.cellphone as string;
                 this.telephone = profile.telephone as string;
                 this.currentPosition = profile.currentPosition as string;
          

          }, error => console.log(error));
        
    }
    else{
      this.router.navigate(['']);
    }
  }

  saveInfo():void{
    console.log(this.currentPosition);
  }

  edit(event){
     this.el.nativeElement.querySelector('#currentPosition').disabled = false;
  }

}
