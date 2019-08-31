import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  // Field Properties
  @Output() public sidenavToggle = new EventEmitter();

  // Icons - Main Navigation
  vdFaBars = faBars;
  vdFaEnvelope = faEnvelope;
  vdFaUser = faUser;
  vdFaUserCircle = faUserCircle;
  vdFaSignInAlt = faSignInAlt;
  vdFaQuestion = faQuestion;
  vdFaWrench = faWrench;
  vdFaCog = faCog;
  vdFaCogs = faCogs;

  // Constructor
  constructor() { }

  // Initialize
  ngOnInit() {
  }

  // mat-icon-button click event function
  public onToggleSidenav = () => {
  this.sidenavToggle.emit();
  }

}
