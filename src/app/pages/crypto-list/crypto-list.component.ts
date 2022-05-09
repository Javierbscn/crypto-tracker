import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from 'src/app/interfaces/coin';
import { CoingeckoApiService } from 'src/app/services/coingecko-api.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  coins$!: Observable<Coin[]>;

  constructor(private readonly coingeckoApiSvc: CoingeckoApiService) {
    this.coins$ = coingeckoApiSvc.coins$;
  }

  ngOnInit(): void {
  }

}
