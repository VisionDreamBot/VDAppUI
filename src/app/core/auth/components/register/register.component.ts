import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Properties
  vdFaAngleUp = faAngleUp;

  constructor() { }

  ngOnInit() {
  }

}
