import { UserModule } from './../user/user.module';
import { SharedModule } from './../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobApplicationFormView } from './../information/components/job-application-form-view/job-application-form-view';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule.forRoot(),
    UserModule
  ],
  declarations: [AdminDashboardComponent, JobApplicationFormView],
  exports: [AdminDashboardComponent, JobApplicationFormView]
})
export class AdminModule { }
