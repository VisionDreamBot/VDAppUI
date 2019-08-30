import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss']
})
export class NavMainComponent implements OnInit {

  // Field Properties
  @Output() public sidenavToggle = new EventEmitter();

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
