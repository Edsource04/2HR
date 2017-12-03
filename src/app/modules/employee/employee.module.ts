import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from '../employee/components/employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent, EmployeeListComponent],
  providers: [EmployeeService],
  exports: [EmployeeComponent]
})
export class EmployeeModule { }
