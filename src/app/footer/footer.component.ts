import { Component, OnInit } from '@angular/core';
import { VDBuildVersionModel } from '../shared/models/vd-buildversion-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Field Properties
  VDBuildVersionModel: VDBuildVersionModel;

  // Constructor
  constructor() {
    this.VDBuildVersionModel = new VDBuildVersionModel();
  }

  // Initialize
  ngOnInit() {
  }

}
