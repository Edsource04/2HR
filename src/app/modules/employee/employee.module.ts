import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from '../employee/components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [EmployeeComponent, EmployeeListComponent, AddEmployeeComponent],
  providers: [EmployeeService],
  exports: [EmployeeComponent]
})
export class EmployeeModule { 
     static forRoot(): ModuleWithProviders{
       return{
         ngModule: EmployeeModule,
         providers: [EmployeeService]
       }
     }
}
