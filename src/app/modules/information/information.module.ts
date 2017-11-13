import { SharedModule } from './../../shared/shared.module';
import { InformationService } from './information.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ListJobPostComponent } from './components/list-job-post/list-job-post.component';
import { Routes, RouterModule} from '@angular/router';

const routers: Routes = [
  {
    path: '', component: JobPostComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routers)
  ],
  declarations: [JobPostComponent, ListJobPostComponent],
  providers: [InformationService],
  exports: [JobPostComponent, ListJobPostComponent]
})
export class InformationModule { 

  static forRoot(): ModuleWithProviders{
    return{
       ngModule: InformationModule,
       providers: [InformationService]
    }
  }
}
