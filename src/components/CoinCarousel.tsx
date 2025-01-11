'use client';

import { TrendingCoin } from '@/types';
import Image from 'next/image';
import { useRef } from 'react';

interface CoinCarouselProps {
  coins: TrendingCoin[];
}

export default function CoinCarousel({ coins }: CoinCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg"
      >
        ←
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-4"
      >
        {coins.map((coin) => {
          const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
          const changeColor = priceChange >= 0 ? 'price-up' : 'price-down';
          const changeSymbol = priceChange >= 0 ? '+' : '';

          return (
            <div
              key={coin.item.id}
              className="min-w-[250px] bg-card-background p-4 rounded-2xl shadow-sm border border-border-color"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Image
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                </div>
                <span className={`${changeColor} text-sm font-medium`}>
                  {changeSymbol}{priceChange.toFixed(2)}%
                </span>
              </div>
              {coin.item.data?.sparkline && (
                <Image
                  src={coin.item.data.sparkline}
                  alt={`${coin.item.name} price graph`}
                  width={200}
                  height={60}
                  className="w-full"
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg"
      >
        →
      </button>
    </div>
  );
} 