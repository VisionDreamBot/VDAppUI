import { Component, OnInit } from '@angular/core';
import { VDBuildVersionModel } from '../shared/models/vd-buildversion-model';

// Icons - Footer
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Field Properties
  VDBuildVersionModel: VDBuildVersionModel;

  // Icons - Footer
  vdFaBalanceScale = faBalanceScale;
  vdFaPlus = faPlus;
  vdFaUserSecret = faUserSecret;
  vdFaCircle = faCircle;

  // Constructor
  constructor() {
    this.VDBuildVersionModel = new VDBuildVersionModel();
  }

  // Initialize
  ngOnInit() {
  }

}
