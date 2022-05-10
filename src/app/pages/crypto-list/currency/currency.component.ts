import { Component, Input, OnInit } from '@angular/core';
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
        Currency: {{ currency }}
      </a>
      <ul class="dropdown-menu">
        <li *ngFor="let currency of currencies">
          <button
            class="dropdown-item"
            (click)="onSetCurrency(currency.symbol)"
          >
            <span class="fw-bold">{{ currency.symbol }}</span> |
            {{ currency.name }}
          </button>
        </li>
      </ul>
    </li>
  </ul>`,
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  @Input() currency!: Currency;
  currencies: Currency[];

  constructor(
    private readonly currenciesSvc: CurrenciesService,
    private readonly coingeckoApiSvc: CoingeckoApiService
  ) {
    this.currencies = currenciesSvc.getCurrencies;
  }

  ngOnInit(): void {}

  onSetCurrency(symbol: string): void {
    console.log(symbol)
  }
}
