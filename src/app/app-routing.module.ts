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
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
