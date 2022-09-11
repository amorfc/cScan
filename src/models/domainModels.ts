export interface Exchange {
  name: string;
  id: number;
  slug: string;
}
export interface Quote {
  marketCap: number;
  price: number;
  percentChange: number;
}
