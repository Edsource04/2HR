import { LoginComponent } from './login/login.component';
import { SharedRoutingModule } from './shared-routing';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './auth.guard';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  declarations: [HeaderComponent, LoginComponent],
  exports: [HeaderComponent, LoginComponent]
})
export class SharedModule { 
  static forRoot() : ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [AuthGuard, LoginService]
    }
  }
}
