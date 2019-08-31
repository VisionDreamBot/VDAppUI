import { Component, OnInit } from '@angular/core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // Properties
  vdFaAngleUp = faAngleUp;

  constructor() { }

  ngOnInit() {
  }

}
