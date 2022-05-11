import { Component, DoCheck } from '@angular/core';
import { CoingeckoApiService } from 'src/app/services/coingecko-api.service';

@Component({
  selector: 'app-pagination',
  template: `<nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" [ngClass]="{ disabled: page === 1 }">
        <button class="page-link" (click)="onPrevPage()">Prev</button>
      </li>
      <li class="page-item disabled">
        <p class="page-link">{{ page }}</p>
      </li>
      <li class="page-item" [ngClass]="{ disabled: page === totalPages }">
        <button class="page-link" (click)="onNextPage()">Next</button>
      </li>
    </ul>
  </nav>`,
})
export class PaginationComponent implements DoCheck {
  page: number;
  totalPages: number;

  constructor(private readonly coingeckoSvc: CoingeckoApiService) {
    this.page = coingeckoSvc.getPage;
    this.totalPages = coingeckoSvc.getTotalPages;
  }

  ngDoCheck(): void {
    this.page = this.coingeckoSvc.getPage;
  }

  onPrevPage(): void {
    if (this.page === 1) return;

    this.coingeckoSvc.setPage = this.page - 1;
  }

  onNextPage(): void {
    if (this.page === this.totalPages) return;

    this.coingeckoSvc.setPage = this.page + 1;
  }
}
