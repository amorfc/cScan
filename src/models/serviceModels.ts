export interface MarketItem {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  platform: any;
  cmc_rank: number;
  self_reported_circulating_supply: any;
  self_reported_market_cap: any;
  tvl_ratio: any;
  last_updated: string;
  quote: Quote;
}

export interface Quote {
  USD: Usd;
}

export interface Usd {
  price: number;
  volume_24h: number;
  volume_change_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  market_cap: number;
  market_cap_dominance: number;
  fully_diluted_market_cap: number;
  tvl: any;
  last_updated: string;
}

export interface ExchangeItem {
  id: number;
}
