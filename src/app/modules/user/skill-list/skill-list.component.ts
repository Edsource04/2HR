import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({  
     selector: 'hr-skill-list',  
     templateUrl: './skill-list.component.html',  
     styleUrls: ['./skill-list.component.css']
     })
     
     export class SkillListComponent implements OnInit {   
     
      @Input() skills: Skill[] = [];  
      @Output() selectedSkill: EventEmitter<Skill> = new EventEmitter();
      name: string;
      percentage: string;

      constructor() { }
      
  ngOnInit() {  
   console.log(this.skills);
   console.log(this.skills[0].name);
}    
  
  selectSkill(index){      
  
  this.selectedSkill.emit(this.skills[index]);  
  
  }   
}
