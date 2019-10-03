import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}
interface TokenResponse {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url: string = "http://zarkadmin.underdev.in";

  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

 public login(user) {
    return this.http.post(this.url+'/consoleLogin', user);
  }

  member(){
  return this.http.post(this.url+'/fetchMembers','');
  }

//  about(){
//    return this.http.post(this.url+'/fetchMembers','');
//  }
  getAuthorizationToken() {
     return localStorage.getItem("token");
  }

}
