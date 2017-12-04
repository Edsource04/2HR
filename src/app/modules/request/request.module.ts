import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './components/request/request.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { SendFormComponent } from './components/send-form/send-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RequestRoutingModule
  ],
  declarations: [RequestComponent, RequestFormComponent, SendFormComponent]
})
export class RequestModule { }
