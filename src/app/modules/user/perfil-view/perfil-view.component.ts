import { User } from './../../../models/user';
import { UserService } from './../user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Profile } from './../../models/profile';


@Component({
  selector: 'hr-perfil-view',
  templateUrl: './perfil-view.component.html',
  styleUrls: ['./perfil-view.component.css']
})
export class PerfilViewComponent implements OnInit {
  
  actualUser: User;
  profile: Profile = new Profile();
  constructor(private userService: UserService,
              private router: ActivatedRoute) { }

  ngOnInit() {
     var user = this.userService.getActualUser();
     console.log(user);
     var token = JSON.parse(localStorage.getItem('actualUser'));
     console.log(token);
    //  this.router.paramMap.switchMap((params: ParamMap) => this.userService.getProfile(params.get('id')))
    //      .subscribe(profile => this.profile = profile);
    this.userService.getProfile(user._id).subscribe(profile => this.profile = profile);
    console.log(this.profile.imgSrc);
  }
}
