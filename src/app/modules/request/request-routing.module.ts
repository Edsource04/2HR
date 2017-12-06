import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './components/request/request.component';
import { SendFormComponent } from './components/send-form/send-form.component';

const routes: Routes = [
  {
    path: '', component: RequestComponent
  },
  {
    path: 'attachment', component: SendFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
