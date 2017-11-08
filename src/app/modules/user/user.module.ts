import { EditableDirective } from './editable.directive';
import { UserRoutingModule } from './user-routing';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilViewComponent } from './perfil-view/perfil-view.component';
import { UserService } from './user.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoadPictureComponent } from './load-picture/load-picture.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { SkillFormComponent } from './skill-form/skill-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    UserRoutingModule
  ],
  declarations: [PerfilViewComponent, ProfileFormComponent, UserDashboardComponent, LoadPictureComponent, PersonalInformationComponent, LanguageFormComponent, WorkFormComponent, EducationFormComponent, SkillFormComponent, EditableDirective],
  providers: [UserService]
})
export class UserModule { }
