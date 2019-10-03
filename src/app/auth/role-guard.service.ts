import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('token')){
      console.log('hi');
      return true;
     }else{
      console.log('else')
    }
   

  }

  constructor() { }
}
