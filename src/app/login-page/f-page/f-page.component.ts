import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'

@Component({
  selector: 'app-f-page',
  templateUrl: './f-page.component.html',
  styleUrls: ['./f-page.component.css']
})
export class FPageComponent implements OnInit {
 signupForm:FormGroup;
  fname:string="";
  lname:string="";
  email:string="";
  password:string="";
   
  constructor(private router:Router,private frmbuilder:FormBuilder) {
    this.signupForm= frmbuilder.group({
      fname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      lname:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      // email:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],

      //password:['',Validators.required,Validators]
    })
   }

ngOnInit() {
    
  }
  getdetails(){
    localStorage.setItem('token','1')
    console.log('login');
    this.router.navigate(['layout/dashboard']);
  }
  
}
