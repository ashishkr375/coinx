export interface CoinPrice {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

export interface TrendingCoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: {
    price: string;
    price_change_percentage_24h: {
      [key: string]: number;
    };
    sparkline: string;
  };
}

export interface TrendingCoin {
  item: TrendingCoinItem;
}

export interface CoinData {
  prices: CoinPrice;
  trending: TrendingCoin[];
} 