import { PerfilTreeComponent } from './perfil-tree/perfil-tree.component';
import { NgModule } from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';

import { ProfileFormComponent } from './profile-form/profile-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PerfilViewComponent } from './perfil-view/perfil-view.component';
import { LoadPictureComponent } from './load-picture/load-picture.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { WorkFormComponent } from './work-form/work-form.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

const routes: Routes = [
    {
      path: 'user-dashboard', component: UserDashboardComponent, children: [
       {
         path: 'perfil', outlet: 'view',component: PerfilViewComponent
       },
       {
         path: 'personalInfo', outlet: 'view', component: PersonalInformationComponent
       },
       {
         path: 'loadPicture', outlet: 'view', component: LoadPictureComponent
       },
       {
         path: 'language', outlet: 'view', component: LanguageFormComponent
       },
       {
         path: 'work-experience', outlet: 'view', component: WorkFormComponent
       },
       {
         path: 'education', outlet: 'view', component: EducationFormComponent
       },
       {
         path: 'skills', outlet: 'view', component: SkillFormComponent
       },
       {
         path: 'tree', outlet: 'view', component: PerfilTreeComponent
       }
      ]
    }
  ];

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })

  export class UserRoutingModule{}