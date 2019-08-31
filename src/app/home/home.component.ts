import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Properties
  vdFaAngleUp = faAngleUp;

  // Constructor
  constructor() {
  }

  // Initialize
  ngOnInit() {
  }

  // Method Function - executeSelectedChange method function that logs 
  // to the console the index number of the selected mat-tab.
  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
