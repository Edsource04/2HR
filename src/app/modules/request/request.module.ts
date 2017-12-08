
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './components/request/request.component';
import { VacationFormComponent } from './components/request-form/request-form.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { SharedModule } from '../../shared/shared.module';
import { LicenseComponent } from './components/license/license.component';
import { PermiseComponent } from './components/permise/permise.component';
import { ComplainsComponent } from './components/complains/complains.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RequestRoutingModule,
    SharedModule
  ],
  declarations: [RequestComponent, VacationFormComponent, SendFormComponent, LicenseComponent, PermiseComponent, ComplainsComponent]
})
export class RequestModule { }
