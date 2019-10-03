import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LogOutComponent} from './log-out/log-out.component'



const routes: Routes = [
  {
    path:'',
    component:LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
