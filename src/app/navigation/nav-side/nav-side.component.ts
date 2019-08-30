import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {

  // Field Properties
  @Output() sidenavClose = new EventEmitter();

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
