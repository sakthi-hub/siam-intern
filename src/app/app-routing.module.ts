import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RoleGuardService } from './auth/role-guard.service';



const routes: Routes = [
  {
    path:'login',
    loadChildren:'./login-page/login-page.module#LoginPageModule'
  },
  {
    path: 'layout',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [RoleGuardService]
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
