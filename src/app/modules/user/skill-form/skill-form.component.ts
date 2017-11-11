import { Component, OnInit } from '@angular/core';
import { Skill } from './../../models/skill';
import { UserService } from './../../../modules/user/user.service';
import { User } from './../../../models/user';

@Component({
  selector: 'hr-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  skills: Array<Skill> = new Array<Skill>();
  name: string;
  percentage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
     var user: User = this.userService.getActualUser();
     this.userService.getProfile(user._id).subscribe((profile) => {
       this.skills = profile.skills;
       console.log(profile.skills);
       console.log(this.skills);
     })
  }

  selectSkill(event){
       this.name = event.name;
       this.percentage = event.percentage;
  }

  hasKills(): boolean{      
    return this.skills.length > 0;  
    }

}
