import { Profile } from './../../models/profile';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hr-perfil-tree',
  templateUrl: './perfil-tree.component.html',
  styleUrls: ['./perfil-tree.component.css']
})
export class PerfilTreeComponent implements OnInit {
   
  profile: Profile = new Profile();
  expand: boolean;
  expandSkill: boolean;
  expandLang: boolean;
  expandEducation: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.expand = false;
    this.expandSkill = false;
    this.expandLang = false;
    this.expandEducation = false;
    var user = this.userService.getActualUser();
    this.userService.getProfile(user._id).subscribe(profile => this.profile = profile);
  }

  toggleExpand(){
    this.expand = !this.expand;
    return false;
  }

  toggleSkill(){
    this.expandSkill = !this.expandSkill;
  }
  toggleLanguage(){
    this.expandLang = !this.expandLang;
  }

  toggleEducation(){
    this.expandEducation = !this.expandEducation;
  }

}
