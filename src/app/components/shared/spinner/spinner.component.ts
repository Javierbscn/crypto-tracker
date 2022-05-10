import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div *ngIf="isLoading$ | async" class="overlay">
    <div class="lds-circle">
      <div></div>
    </div>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  isLoading$: Subject<boolean>;

  constructor(private spinnerSvc: SpinnerService) {
    this.isLoading$ = spinnerSvc.isLoading$;
  }

  ngOnInit(): void {}
}
