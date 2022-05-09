import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoListRoutingModule } from './crypto-list-routing.module';
import { CryptoListComponent } from './crypto-list.component';
import { CurrencyComponent } from './currency/currency.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UpButtonComponent } from './up-button/up-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CryptoListComponent,
    CurrencyComponent,
    PaginationComponent,
    UpButtonComponent
  ],
  imports: [
    CommonModule,
    CryptoListRoutingModule,
    HttpClientModule
  ]
})
export class CryptoListModule { }
