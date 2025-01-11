import { CoinPrice } from '@/types';

interface PriceOverviewProps {
  prices: CoinPrice;
}

export default function PriceOverview({ prices }: PriceOverviewProps) {
  const changeColor = prices.usd_24h_change >= 0 ? 'price-up' : 'price-down';
  const changeSymbol = prices.usd_24h_change >= 0 ? '+' : '';

  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-4">
        <h1 className="text-5xl font-bold tracking-tight">
          ${prices.usd.toLocaleString()}
        </h1>
        <span className={`text-lg font-medium ${changeColor}`}>
          {changeSymbol}{prices.usd_24h_change.toFixed(2)}%
        </span>
      </div>
      <p className="text-lg text-secondary mt-1">
        ₹{prices.inr.toLocaleString()}
      </p>
    </div>
  );
} 