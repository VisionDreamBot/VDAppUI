import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Properties
  vdFaMapMarkerAlt = faMapMarkerAlt;
  vdFaAngleUp = faAngleUp;

  constructor() { }

  ngOnInit() {
  }

}
