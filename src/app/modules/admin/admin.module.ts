import { SharedModule } from './../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [AdminDashboardComponent],
  exports: [AdminDashboardComponent]
})
export class AdminModule { }
