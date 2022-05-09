import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-button',
  template: `<div
    *ngIf="showButton"
    (click)="onScrollTop()"
    class="position-fixed bottom-0 end-0 m-3"
  >
    <button class="btn btn-primary rounded-circle fs-4">⮝</button>
  </div>`,
  styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent implements OnInit {
  showButton: boolean;

  private scrollHeight: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.showButton = false;
    this.scrollHeight = 500;
  }

  @HostListener('window: scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
  }

}
