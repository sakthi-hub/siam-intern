import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { FPageComponent } from './f-page/f-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';






@NgModule({
  declarations: [FPageComponent, LoginComponent],
  imports: [
    CommonModule,
    NgbModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,FormsModule 
  ]
})
export class LoginPageModule { }
