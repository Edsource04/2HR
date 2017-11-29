import { WorkDays } from './../../models/workdays';
import { Component, OnInit } from '@angular/core';
import { Application} from './../../models/application';
import { FamilyMember } from './../../models/family-member';
import { EducationApplication } from './../../models/education-application';
import { LanguageApplication } from './../../models/language-application';
import { PersonalReference } from './../../models/personal-reference';
import { SkillApplication } from './../../models/skill-application';
import { WorkExpApplication } from './../../models/work-experience-application';


@Component({
   selector: 'hr-job-application-form-view',
   templateUrl: './job-application-form-view.html',
   styleUrls: ['./job-application-form-view.css']
})

export class JobApplicationFormView implements OnInit{

   constructor(){}
   
   ngOnInit(){
   
   }
}
