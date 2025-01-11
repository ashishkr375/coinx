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
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 px-4"
        >
          {coins.map((coin) => {
            const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
            const changeColor = priceChange >= 0 ? 'text-green-600' : 'text-red-600';
            const changeSymbol = priceChange >= 0 ? '+' : '';

            return (
              <div
                key={coin.item.id}
                className="min-w-[250px] bg-white p-4 rounded-lg border"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src={coin.item.small}
                    alt={coin.item.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
                  <span className={`${changeColor} text-sm ml-auto`}>
                    {changeSymbol}{priceChange.toFixed(2)}%
                  </span>
                </div>
                <div className="font-medium">
                  ${parseFloat(coin.item.data?.price || '0').toLocaleString()}
                </div>
                <Image
                  src={coin.item.data?.sparkline || coin.item.small}
                  alt={`${coin.item.name} price graph`}
                  width={50}
                  height={50}
                  className="w-auto mt-2"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </Card>
  );
} 