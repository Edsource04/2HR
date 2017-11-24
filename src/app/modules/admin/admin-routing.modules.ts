import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationFormView } from './../information/components/job-application-form-view/job-application-form-view.ts';

const routes: Routes = [
  {
    path: 'admin-dashboard', component: AdminDashboardComponent, pathMatch: 'full', children: [
      {
        path: 'application-form-view', component: JobApplicationFormView, router: 'view'
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
