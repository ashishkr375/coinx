'use client';

import { Card } from "@/components/ui/card";
import { CoinPrice } from "@/types";

interface PerformanceProps {
  prices: CoinPrice;
}

export function PerformanceSection({ prices }: PerformanceProps) {
  // Calculate ranges (using example multipliers)
  const todayLow = prices.usd * 0.95;
  const todayHigh = prices.usd * 1.05;
  const weekLow = prices.usd * 0.85;
  const weekHigh = prices.usd * 1.15;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        {/* Today's Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Today&apos;s Low</span>
            <span>Today&apos;s High</span>
          </div>
          <div className="relative h-2">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full" />
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>${todayLow.toLocaleString()}</span>
            <span>${todayHigh.toLocaleString()}</span>
          </div>
        </div>

        {/* 52 Week Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative h-2">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full" />
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>${weekLow.toLocaleString()}</span>
            <span>${weekHigh.toLocaleString()}</span>
          </div>
        </div>

        {/* Fundamentals */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Fundamentals</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Bitcoin Price</span>
                <span className="font-medium">${prices.usd.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Market Cap</span>
                <span className="font-medium">$323,507,290,047</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">24h Low / 24h High</span>
                <span className="font-medium">${todayLow.toLocaleString()} / ${todayHigh.toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Market Cap Dominance</span>
                <span className="font-medium">38.343%</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">Volume / Market Cap</span>
                <span className="font-medium">0.0718</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-muted-foreground">All-Time High</span>
                <div className="text-right">
                  <div className="font-medium">$69,044.77</div>
                  <div className="text-red-500 text-sm">-75.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 