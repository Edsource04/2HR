import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationFormView } from './../information/components/job-application-form-view/job-application-form-view';
import { PersonalInformationComponent } from './../user/personal-information/personal-information.component';
import { LoadPictureComponent } from './../user/load-picture/load-picture.component';
import { PerfilViewComponent } from './../user/perfil-view/perfil-view.component';
import { LanguageFormComponent } from './../user/language-form/language-form.component';
import { WorkFormComponent } from './../user/work-form/work-form.component';
import { EducationFormComponent } from './../user/education-form/education-form.component';
import { SkillFormComponent } from './../user/skill-form/skill-form.component';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, children: [
      {
        path: 'application-form-view', component: JobApplicationFormView, outlet: 'view'
      },
      {           
        path: 'perfil', outlet: 'admin',component: PerfilViewComponent 
      },        
      {           
        path: 'personalInfo', outlet: 'admin', component: PersonalInformationComponent         
      },        
      { 
        path: 'loadPicture', outlet: 'admin', component: LoadPictureComponent 
      },         
      {           
        path: 'language', outlet: 'admin', component: LanguageFormComponent         
      },         
      {           
        path: 'work-experience', outlet: 'admin', component: WorkFormComponent      
      },       
      {          
        path: 'education', outlet: 'admin', component: EducationFormComponent       
      },         
      {           
        path: 'skills', outlet: 'admin', component: SkillFormComponent       
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 

}
