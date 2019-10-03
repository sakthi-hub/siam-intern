import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';




const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:'./dashboard/dashboard.module#DashboardModule'
  },
{
  path: '',
  component: LayoutComponent
},
{ 
  path: 'user',
  loadChildren: './user/user.module#UserModule'
},
{path: 'about',
loadChildren: './about/about.module#AboutModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
