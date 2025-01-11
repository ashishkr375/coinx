'use client'

import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bitcoin } from 'lucide-react'
import { CoinPrice } from '@/types'
import TradingViewChart from './TradingViewChart'
import { PerformanceSection } from './PerformanceSection'
import { CoinTabs } from './CoinTabs'
import { SentimentSection } from './SentimentSection'
import { AboutSection } from './AboutSection'
import { TokenomicsSection } from './TokenomicsSection'
import { TeamSection } from './TeamSection'
import { TrendingCarousel } from './TrendingCarousel'
import { Breadcrumb } from './Breadcrumb'
import Image from 'next/image'

interface PriceChartProps {
  symbol: string;
  prices: CoinPrice;
  trendingCoins: any[];
}

export function PriceChart({ symbol, prices, trendingCoins }: PriceChartProps) {
  const changeColor = prices.usd_24h_change >= 0 ? 'text-green-600' : 'text-red-600';
  const changeSymbol = prices.usd_24h_change >= 0 ? '+' : '';

  return (
    <div className="space-y-6">
      <div>
        <Breadcrumb coinName={symbol.toUpperCase()} />
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src={`https://i.postimg.cc/W4c6Q4Qx/image.png`}
              alt={symbol}
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">{symbol.toUpperCase()}</h1>
            <span className="text-xs md:text-sm bg-gray-500 text-white px-2 py-1 rounded">
              BTC
            </span>
          </div>
          <span className="px-2 py-1 bg-gray-600 text-white text-xs md:text-sm rounded">
            Rank #{1}
          </span>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-4">
            <p className="text-3xl font-bold">${prices.usd.toLocaleString()}</p>
            <span className={`${changeColor} text-sm font-medium`}>
              {changeSymbol}{prices.usd_24h_change.toFixed(2)}%
            </span>
          </div>
          <p className="text-gray-500">
            ₹ {prices.inr.toLocaleString()}
          </p>
        </div>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mb-4">
            <div className="flex items-center gap-2"><h2 className="text-sm md:text-lg font-semibold">Bitcoin Price Chart (USD)</h2></div>
          
          <div className="flex gap-0 md:gap-2">
            {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((period) => (
              <button
                key={period}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full ${
                  period === "7D"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[400px] w-full">
          <TradingViewChart symbol="BTCUSD" />
        </div>
      </Card>

      <CoinTabs />
      <PerformanceSection prices={prices} />
      <SentimentSection />
      <AboutSection />
      <TokenomicsSection />
      <TeamSection />
      
    </div>
  )
} 