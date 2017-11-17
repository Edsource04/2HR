import { JobApplicantViewComponent } from './components/job-applicant-view/job-applicant-view.component';
import { SharedModule } from './../../shared/shared.module';
import { InformationService } from './information.service';
import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ListJobPostComponent } from './components/list-job-post/list-job-post.component';
import { Routes, RouterModule} from '@angular/router';
import { JobApplicantFormComponent } from './components/job-applicant-form/job-applicant-form.component';
import { JobCenterComponent } from './components/job-center/job-center.component';

const routers: Routes = [
  {
    path: 'posts', children:[
       {
         path: '', component: JobPostComponent
       },
       {
        path: ':index', children: [
           {
               path: '', component: JobApplicantViewComponent
           }   
        ]
        
       }
      ]},
    {
     path: 'applicant-form', component: JobApplicantFormComponent
    },
    {
      path: 'applicant-center', component: JobCenterComponent
    }

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [JobPostComponent, ListJobPostComponent, JobApplicantViewComponent, JobApplicantFormComponent, JobCenterComponent],
  providers: [InformationService],
  exports: [JobPostComponent, ListJobPostComponent, JobApplicantViewComponent, JobApplicantFormComponent, JobCenterComponent]
})
export class InformationModule { 

  static forRoot(): ModuleWithProviders{
    return{
       ngModule: InformationModule,
       providers: [InformationService]
    }
  }
}
