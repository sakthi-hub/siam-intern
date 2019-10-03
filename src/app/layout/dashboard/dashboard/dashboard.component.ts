import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../auth/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public userslist = [];
 //public boolean=true;
 public loading = false;
  constructor(public auth: StudentService) { }
  
//  fetch()
//  {
//    this.auth.member().subscribe(
//   (res:any) => {
//     console.log(res.data)
//     this.userslist = res.data.users;
//   })

//  }
  
fetch()
{
          this.loading = true;

          this.auth.member().subscribe(

              (res:any) => {
                  this.loading = false;
                  this.userslist= res.data.users;
              })
      }
    

  ngOnInit() {
this.fetch();
  }

}

