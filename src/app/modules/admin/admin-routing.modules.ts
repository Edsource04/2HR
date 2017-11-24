import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationFormView } from './../information/components/job-application-form-view/job-application-form-view';
import { PersonalInformationComponent } from './../user/personal-information/personal-information.component';
import { LoadPictureComponent } from './../user/load-picture/load-picture.component';
import { PerfilViewComponent } from './../user/perfil-view/perfil-view.component';
import { LanguageFormComponent } from './../user/language-form/language-form.component';
import { WorkFormComponent } from './../user/work-form/work-form.component';
import { EducationFormComponent } from './../user/language-form/language-form.component';
import { SkillFormComponent } from './../user/skill-form/skill-form.component';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, pathMatch: 'full', children: [
      {
        path: 'application-form-view', component: JobApplicationFormView, router: 'view'
      },
      {           
        path: 'perfil', outlet: 'view',component: PerfilViewComponent 
      },        
      {           
        path: 'personalInfo', outlet: 'view', component: PersonalInformationComponent         
      },        
      { 
        path: 'loadPicture', outlet: 'view', component: LoadPictureComponent 
      },         
      {           
        path: 'language', outlet: 'view', component: LanguageFormComponent         
      },         
      {           
        path: 'work-experience', outlet: 'view', component: WorkFormComponent      
      },       
      {          
        path: 'education', outlet: 'view', component: EducationFormComponent       
      },         
      {           
        path: 'skills', outlet: 'view', component: SkillFormComponent       
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
