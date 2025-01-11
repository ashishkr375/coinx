'use client';

import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import { CoinPrice } from "@/types";

interface PerformanceProps {
  prices: CoinPrice;
}

export function PerformanceSection({ prices }: PerformanceProps) {
  const todayLow = 46930.22;
  const todayHigh = 49343.83;
  const currentPrice = 48637.83;
  
  // Calculate percentage for slider position (0-100)
  const sliderPosition = ((currentPrice - todayLow) / (todayHigh - todayLow)) * 100;

  const fundamentals = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    {
      label: "All-Time High",
      value: "$69,044.77",
      change: "-75.6%",
      date: "Nov 10, 2021 (about 1 year)",
      isNegative: true
    },
    {
      label: "All-Time Low",
      value: "$67.81",
      change: "24729.1%",
      date: "Jul 06, 2013 (over 9 years)",
      isNegative: false
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-8">
        {/* Today's Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Today&apos;s Low</span>
            <span>Today&apos;s High</span>
          </div>
          <div className="relative h-1.5">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div 
              className="absolute w-3 h-3 bg-white border-2 border-black rounded-full -translate-y-1/4"
              style={{ left: `${sliderPosition}%`, transform: `translateX(-50%) translateY(-25%)` }}
            />
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>${todayLow.toLocaleString()}</span>
            <span>${todayHigh.toLocaleString()}</span>
          </div>
        </div>

        {/* 52W Range */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="relative h-1.5">
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <div 
              className="absolute w-3 h-3 bg-white border-2 border-black rounded-full -translate-y-1/4"
              style={{ left: '50%', transform: `translateX(-50%) translateY(-25%)` }}
            />
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>$16,930.22</span>
            <span>$49,743.83</span>
          </div>
        </div>

        {/* Fundamentals */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <h3 className="text-lg font-semibold">Fundamentals</h3>
            <Info className="h-4 w-4 text-gray-400" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-8">
            <div className="space-y-4">
              {fundamentals.slice(0, 5).map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {fundamentals.slice(5).map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b">
                  <span className="text-gray-500">{item.label}</span>
                  <div className="text-right">
                    <div className="font-medium">{item.value}</div>
                    {'change' in item && (
                      <div className={`text-sm ${item.isNegative ? 'text-red-500' : 'text-green-500'}`}>
                        {item.change}
                        <div className="text-gray-500 text-xs">{item.date}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 