import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GlobalDialogComponent } from './dialogs/global-dialog/global-dialog.component';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { LogoutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';

import { DatePickerDirective } from './directives/datepicker.directive';
import { RequiredLabelDirective } from './directives/requiredlabel.directive';

@NgModule({
  declarations: [
    GlobalDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    LogoutDialogComponent,
    DatePickerDirective,
    RequiredLabelDirective,
    GlobalDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    LogoutDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    GlobalDialogComponent,
    SuccessDialogComponent,       // Export components:
    ErrorDialogComponent,        // Success and Error
    LogoutDialogComponent,
    DatePickerDirective,
    RequiredLabelDirective
  ],
  entryComponents: [              // Place dialog components inside 'entryComponents' array because they are not going
    GlobalDialogComponent,
    SuccessDialogComponent,      // to use routing, nor app selector when calling these components. They are going to 
    ErrorDialogComponent,        // be used as template references for the dialog’s open() function and thus the need
    LogoutDialogComponent
  ]
})
export class SharedModule { }
