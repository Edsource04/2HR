import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found-component/not-found-component.component';
import { AuthGuard } from './shared/auth.guard';



const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard]
  },
  {
    path: 'user-login', loadChildren: './shared/shared.module#SharedModule'
  },
  {
    path: 'news-jobs', loadChildren: './modules/information/information.module#InformationModule'
  },
  {
    path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'applying', loadChildren: './modules/request/request.module#RequestModule'
  },
  {
    path: 'sending', loadChildren: './modules/request/request.module#RequestModule'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
