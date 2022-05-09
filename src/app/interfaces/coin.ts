export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  total_supply: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  max_supply: number;
  circulating_supply: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  fully_diluted_valuation: number;
  last_updated: string;
  roi?: any;
}
