import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" [routerLink]="['/']">Crypto Tracker</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/']">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/notes']">My notes</a>
        </li>
      </ul>
    </div>
  </nav>`,
})
export class HeaderComponent {}
