import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/interfaces/currency';
import { CoingeckoApiService } from 'src/app/services/coingecko-api.service';
import { CurrenciesService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-currency',
  template: `<ul class="nav nav-tabs">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-expanded="false"
      >
        Currency: {{ currentCurrency | uppercase }}
      </a>
      <ul class="dropdown-menu">
        <li *ngFor="let currency of currencies">
          <button
            class="dropdown-item d-flex justify-content-between"
            (click)="onSetCurrency(currency.symbol)"
          >
            <span class="fw-bold">{{ currency.symbol }}</span>
            {{ currency.name }}
          </button>
        </li>
      </ul>
    </li>
  </ul>`,
})
export class CurrencyComponent {
  @Input() currentCurrency!: string;
  currencies: Currency[];

  constructor(
    private readonly currenciesSvc: CurrenciesService,
    private readonly coingeckoApiSvc: CoingeckoApiService
  ) {
    this.currencies = currenciesSvc.getCurrencies;
  }

  onSetCurrency(currencySymbol: string): void {
    this.coingeckoApiSvc.setCurrency = currencySymbol.toLowerCase();
  }
}
