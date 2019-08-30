import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  // Constructor
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,   // dialogRef manipulates the opened dialog and in this case 
    @Inject(MAT_DIALOG_DATA) public data: any               // it is the ErrorDialogComponent's template reference. The
  ) { }                                                     // data variable accepts any information passed to this component.

  // Initialize
  ngOnInit() {
  }

  // Public Method Functions - closeDialog function
  public closeDialog = () => {
    this.dialogRef.close();
  }

}
