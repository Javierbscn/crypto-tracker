import { Injectable } from '@angular/core';
import { Currency } from 'src/app/interfaces/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  currencies: Currency[];

  constructor() {
    this.currencies = [
      { symbol: 'USD', name: 'US Dollar' },
      { symbol: 'EUR', name: 'Euro' },
      { symbol: 'JPY', name: 'Japanese Yen' },
      { symbol: 'TWD', name: 'New Taiwan Dollar' },
      { symbol: 'IDR', name: 'Indonesian Rupiah' },
      { symbol: 'CNY', name: 'Chinese Yuan' },
      { symbol: 'RUB', name: 'Russian Ruble' },
      { symbol: 'KRW', name: 'South Korean Won' },
      { symbol: 'AED', name: 'United Arab Emirates Dirham' },
      { symbol: 'ARS', name: 'Argentine Peso' },
      { symbol: 'AUD', name: 'Australian Dollar' },
      { symbol: 'BDT', name: 'Bangladeshi Taka' },
      { symbol: 'BHD', name: 'Bahraini Dinar' },
      { symbol: 'BMD', name: 'Bermudian Dollar' },
      { symbol: 'BRL', name: 'Brazil Real' },
      { symbol: 'CAD', name: 'Canadian Dollar' },
      { symbol: 'CHF', name: 'Swiss Franc' },
      { symbol: 'CLP', name: 'Chilean Peso' },
      { symbol: 'CZK', name: 'Czech Koruna' },
      { symbol: 'DKK', name: 'Danish Krone' },
      { symbol: 'GBP', name: 'British Pound Sterling' },
      { symbol: 'HKD', name: 'Hong Kong Dollar' },
      { symbol: 'HUF', name: 'Hungarian Forint' },
      { symbol: 'ILS', name: 'Israeli New Shekel' },
      { symbol: 'INR', name: 'Indian Rupee' },
      { symbol: 'KWD', name: 'Kuwaiti Dinar' },
      { symbol: 'LKR', name: 'Sri Lankan Rupee' },
      { symbol: 'MMK', name: 'Burmese Kyat' },
      { symbol: 'MXN', name: 'Mexican Peso' },
      { symbol: 'MYR', name: 'Malaysian Ringgit' },
      { symbol: 'NGN', name: 'Nigerian Naira' },
      { symbol: 'NOK', name: 'Norwegian Krone' },
      { symbol: 'NZD', name: 'New Zealand Dollar' },
      { symbol: 'PHP', name: 'Philippine Peso' },
      { symbol: 'PKR', name: 'Pakistani Rupee' },
      { symbol: 'PLN', name: 'Polish Zloty' },
      { symbol: 'SAR', name: 'Saudi Riyal' },
      { symbol: 'SEK', name: 'Swedish Krona' },
      { symbol: 'SGD', name: 'Singapore Dollar' },
      { symbol: 'THB', name: 'Thai Baht' },
      { symbol: 'TRY', name: 'Turkish Lira' },
      { symbol: 'UAH', name: 'Ukrainian hryvnia' },
      { symbol: 'VND', name: 'Vietnamese đồng' },
      { symbol: 'ZAR', name: 'South African Rand' },
      { symbol: 'XDR', name: 'IMF Special Drawing Rights' },
    ];
  }

  getCurrencies(): Currency[] {
    return this.currencies;
  }
}
