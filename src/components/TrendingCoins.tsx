import { TrendingCoin } from '@/types';
import Image from 'next/image';

interface TrendingCoinsProps {
  coins: TrendingCoin[];
}

export default function TrendingCoins({ coins }: TrendingCoinsProps) {
  return (
    <div className="bg-card-background p-6 rounded-2xl shadow-sm border border-border-color">
      <h2 className="text-xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.slice(0, 3).map((coin) => {
          const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
          const changeColor = priceChange >= 0 ? 'price-up' : 'price-down';
          const changeSymbol = priceChange >= 0 ? '+' : '';

          return (
            <div key={coin.item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={coin.item.small}
                  alt={coin.item.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
              </div>
              <span className={`${changeColor} font-medium`}>
                {changeSymbol}{priceChange.toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
} 