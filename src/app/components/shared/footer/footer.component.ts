import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="bg-dark text-white py-5">
    <div class="container">
      <p class="text-center">
        Application created by
        <a class="text-white" href="http://github.com/Javierbscn" target="_blank" rel="noopener noreferrer">Javier Boscán</a>
        &copy; All Rights Reserved
      </p>
    </div>
  </footer>`,
})
export class FooterComponent {}
