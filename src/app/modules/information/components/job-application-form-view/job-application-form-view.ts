import { WorkDays } from './../../models/workdays';
import { Component, OnInit } from '@angular/core';
import { Application} from './../../models/application';
import { FamilyMember } from './../../models/family-member';
import { EducationApplication } from './../../models/education-application';
import { LanguageApplication } from './../../models/language-application';
import { PersonalReference } from './../../models/personal-reference';
import { SkillApplication } from './../../models/skill-application';
import { WorkExpApplication } from './../../models/work-experience-application';
import { AdminService } from './../../../admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
   selector: 'hr-job-application-form-view',
   templateUrl: './job-application-form-view.html',
   styleUrls: ['./job-application-form-view.css']
})

export class JobApplicationFormView implements OnInit{
   
   application: Application;

   constructor(
           private router: ActivatedRoute,
           private adminService: AdminService,
           private calendarRoute: Router
   ){}
   
   ngOnInit(){
       this.adminService.getApplication(this.router.snapshot.params.id).subscribe((app)=>{
               if(app)
                 {
                    console.log(app.birthday);
                   this.application = app;
                }
                 else
                 this.application  = null;
       });
   }
  
   hasSunday():boolean{
           if(!this.application || this.application.workDays.length < 1) return false;
           for (var id in this.application.workDays){
                   if(this.application.workDays[id] == WorkDays.sunday) return true;
           }

           return false;
   }

   hasMonday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.monday) return true;
        }

        return false;
}

hasTuesday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.tuesday) return true;
        }

        return false;
}

hasWednesday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.wednesday) return true;
        }

        return false;
}

hasThursday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.thursday) return true;
        }

        return false;
}

hasFriday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.friday) return true;
        }

        return false;
}

hasSaturday():boolean{
        if(!this.application || this.application.workDays.length < 1) return false;
        for (var id in this.application.workDays){
                if(this.application.workDays[id] == WorkDays.saturday) return true;
        }

        return false;
}

calendar(){
    this.calendarRoute.navigate(['admin', 'admin-dashboard', 'calendar', {outlets: {admin: null}}]);
}
}
