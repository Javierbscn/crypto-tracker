import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Coin } from '../interfaces/coin';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoApiService {
  coinsSubject$: Subject<Coin[]> = new Subject<Coin[]>();
  coins$: Observable<Coin[]>;
  private API_URL: string;
  private currency: string;
  private totalPages: number;
  private currentPage: number;

  constructor(private readonly http: HttpClient) {
    this.coins$ = this.coinsSubject$.asObservable();
    this.API_URL =
      'https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&per_page=100&sparkline=false';
    this.currency = 'usd';
    this.totalPages = 134;
    this.currentPage = 1;

    this.getCoins();
  }

  private getCoins(): void {
    this.http
      .get<Coin[]>(
        this.API_URL + `&vs_currency=${this.currency}&page=${this.currentPage}`
      )
      .pipe(tap(res => this.coinsSubject$.next(res)))
      .subscribe();
  }
}
