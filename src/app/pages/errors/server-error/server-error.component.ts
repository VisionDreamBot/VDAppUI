import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  // Properties
  public reportedError: boolean;
  public errorPercentage: number = 0;
  public timer;

  // Constructor
  constructor() { }

  // Initialize
  ngOnInit() {
  }

  // Public Method Functions - CheckBox checkChanged function
  public checkChanged = (event) => {
    this.reportedError = event.checked;

    this.reportedError ? this.startTimer() : this.stopTimer();
  }

  // Private Method Functions - Private helper startTimer function
  private startTimer = () => {
    this.timer = setInterval(() => {
      this.errorPercentage += 1;

      if (this.errorPercentage === 100) {
        clearInterval(this.timer);
      }
    }, 30);
  }

  // Private Method Functions - Private helper stopTimer function
  private stopTimer = () => {
    clearInterval(this.timer);
    this.errorPercentage = 0;
  }

}
