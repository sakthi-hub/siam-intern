import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms'
import {StudentService} from '../../auth/student.service';
import { IStudent } from 'src/app/auth/IStudent';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  email: string="";
  password: string=""; 
  private records: IStudent[];
  errMsg: string;
  
   Login = {
    user_id : '',
   password :''
  }
  constructor(private router:Router,private frmbuilder:FormBuilder,private auth:StudentService) { 
    this.signupForm= frmbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.maxLength(15),Validators.minLength(1)])],
    })
}

  login(signupForm: NgForm) {
    const obj = {
      "user_id" : signupForm.value.email,
      "password": signupForm.value.password
    }
    this.auth.login(obj).subscribe(
      (res:any) => {
        console.log(res)
         
        if(res.status==true){
          localStorage.setItem('token',res.data.user.token)
          this.router.navigate(['layout/dashboard']);
          

        }else{
         alert("credentials is wrong");
        }

      
    }, (err) => {
      alert(err);
    });
  }
ngOnInit() {
    
  }
}








