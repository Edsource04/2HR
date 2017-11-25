import { Component, OnInit } from '@angular/core';
import { Application, 
         WorkDays, 
         FamilyMember, 
         EducationApplication, 
         WorkExpApplication, 
         SkillApplication, 
         LanguageApplication, 
         PersonalReference,
        } from './../../models/application';

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
