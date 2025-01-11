/* eslint-disable */
'use client';

import { Card } from "@/components/ui/card";
import { TrendingCoin } from "@/types";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface TrendingCarouselProps {
  title: string;
  coins: TrendingCoin[];
}

export function TrendingCarousel({ title, coins }: TrendingCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
        >
          {coins.map((coin) => {
            const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
            const changeColor = priceChange >= 0 ? 'text-green-600' : 'text-red-600';
            const changeSymbol = priceChange >= 0 ? '+' : '';
            const graphColor = priceChange >= 0 ? '#0FBA83' : '#FF433E';

            return (
              <div
                key={coin.item.id}
                className="min-w-[300px] p-5 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={coin.item.small}
                      alt={coin.item.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-semibold">{coin.item.symbol.toUpperCase()}</span>
                  </div>
                  <span className={`ml-auto px-2 py-1 rounded-sm text-sm font-medium ${changeColor} ${priceChange >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                    {changeSymbol}{priceChange.toFixed(2)}%
                  </span>
                </div>
                <div className="font-medium text-gray-900">
                  ${parseFloat(coin.item.data?.price || '0').toLocaleString()}
                </div>
                <div className="mt-2 h-[60px]">
                  <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path
                      d={`M0 25 L10 20 L20 28 L30 15 L40 20 L50 10 L60 18 L70 5 L80 15 L90 8 L100 12`}
                      fill="none"
                      stroke={graphColor}
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d={`M0 25 L10 20 L20 28 L30 15 L40 20 L50 10 L60 18 L70 5 L80 15 L90 8 L100 12 V30 H0 Z`}
                      fill={graphColor}
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
} 