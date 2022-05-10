import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoListRoutingModule } from './crypto-list-routing.module';
import { CryptoListComponent } from './crypto-list.component';
import { CurrencyComponent } from './currency/currency.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UpButtonComponent } from './up-button/up-button.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerModule } from 'src/app/components/shared/spinner/spinner.module';
import { SpinnerInterceptor } from 'src/app/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    CryptoListComponent,
    CurrencyComponent,
    PaginationComponent,
    UpButtonComponent,
  ],
  imports: [
    CommonModule,
    CryptoListRoutingModule,
    HttpClientModule,
    SpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
})
export class CryptoListModule {}
