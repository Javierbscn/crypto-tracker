import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Coin } from 'src/app/interfaces/coin';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoApiService {
  coinsSubject$: BehaviorSubject<Coin[]> = new BehaviorSubject<Coin[]>([]);
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
    UtilitiesService.intervalPetition(
      200000,
      () => {
        return this.http
          .get<Coin[]>(
            this.API_URL + `&vs_currency=${this.currency}&page=${this.currentPage}`
          )
          .pipe(
            tap((res) =>
              res.sort((coinA: Coin, coinB: Coin) => coinA.market_cap_rank - coinB.market_cap_rank)
            ),
            tap((res) => this.coinsSubject$.next(res))
          );
      },
      () => true
    ).subscribe();
  }

  get getCurrency(): string {
    return this.currency;
  }

  get getPage(): number {
    return this.currentPage;
  }

  get getTotalPages(): number {
    return this.totalPages;
  }

  set setCurrency(currency: string) {
    this.currency = currency;

    this.getCoins();
  }

  set setPage(page: number) {
    this.currentPage = page;

    this.getCoins();
  }
}
