

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SendFormComponent } from './components/send-form/send-form.component'
import { MessageViewComponent} from './components/message-view/message-view.component';

const routes: Routes = [
  {
    path: '', component: MessageComponent
  },
  {
    path: 'send', component: SendFormComponent
  },
  {
      path: 'message-list', component: MessageListComponent
  },
  {
      path: 'details/:id', component: MessageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
