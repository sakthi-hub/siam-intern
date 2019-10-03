import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name = 'Angular 6';
  marked = false;
  theCheckbox = false;

  constructor() { }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }

  ngOnInit() {
  }

}
