import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {

  // Field Properties
  @Output() sidenavClose = new EventEmitter();

  // Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
  vdFaHome = faHome;
  vdFaClipboardList = faClipboardList;
  vdFaProjectDiagram = faProjectDiagram;
  vdFaEnvelope = faEnvelope;
  vdFaUser = faUser;
  vdFaSignInAlt = faSignInAlt;
  vdFaSort = faSort;

  // Constructor
  constructor() { }

  // Initialize
  ngOnInit() {
  }

  // Function Methods - onSidenavClose function
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
