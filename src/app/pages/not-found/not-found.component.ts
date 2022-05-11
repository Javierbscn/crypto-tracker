import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<section
    class="height-75 d-flex flex-column justify-content-center align-items-center my-5 py-5"
  >
    <h1 class="h1 fw-bold">¡Oh no! Error 404</h1>
    <p class="h3">The page you're looking for could not be found.</p>
  </section>`,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {}
