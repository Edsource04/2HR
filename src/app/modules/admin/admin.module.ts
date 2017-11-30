import { UserModule } from './../user/user.module';
import { SharedModule } from './../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { JobApplicationFormView } from './../information/components/job-application-form-view/job-application-form-view';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { DummyComponent } from './components/dummy/dummy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    AdminRoutingModule,
    SharedModule.forRoot(),
    UserModule
  ],
  declarations: [AdminDashboardComponent, JobApplicationFormView, ApplicationListComponent, DummyComponent],
  providers: [AdminService],
  exports: [AdminDashboardComponent, JobApplicationFormView]
})
export class AdminModule { }
