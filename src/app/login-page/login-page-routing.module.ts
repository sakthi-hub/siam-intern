import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FPageComponent } from './f-page/f-page.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent }
  // { path:'signup',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
