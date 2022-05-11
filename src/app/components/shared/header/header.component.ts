import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" [routerLink]="['/']"
        ><img class="icon" src="/assets/icon.png" alt="Logo" /> Crypto
        Tracker</a
      >
      <ul class="nav">
        <li class="nav-item">
          <a
            class="nav-link nav-link-hover"
            [ngClass]="{
              active: currentRoute === '/' || currentRoute === '/home'
            }"
            [routerLink]="['/home']"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-hover"
            [ngClass]="{ active: currentRoute === '/notes' }"
            [routerLink]="['/notes']"
            >My notes</a
          >
        </li>
      </ul>
    </div>
  </nav>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = router.url;
  }

  ngDoCheck(): void {
    this.currentRoute = this.router.url;
  }
}
