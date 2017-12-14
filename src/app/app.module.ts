import { MessageModule } from './modules/message/message.module';
import { RequestModule } from './modules/request/request.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { SharedRoutingModule } from './shared/shared-routing';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BorderLeftDirective } from './border-directive';
import { AuthGuard } from './shared/auth.guard';
import { LoginService } from './shared/services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StrikeModule } from './modules/strike/strike.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BorderLeftDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    SharedModule.forRoot(),
    MessageModule,
    UserModule,
    AdminModule,
    EmployeeModule,
    RequestModule,
    StrikeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
