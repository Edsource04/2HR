import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { MessageViewComponent } from './components/message-view/message-view.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MessageListComponent, SendFormComponent, MessageViewComponent, MessageComponent],
  exports: [MessageListComponent, SendFormComponent, MessageViewComponent, MessageComponent]
})
export class MessageModule { 
  static forRoot() : ModuleWithProviders{
    return {
      ngModule: MessageModule,
      providers: [MessageService]
    }
  }
}
