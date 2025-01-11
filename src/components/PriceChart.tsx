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
      <div className="flex items-center gap-2">
        <Bitcoin className="h-8 w-8 text-orange-500" />
        <div>
          <h1 className="text-2xl font-bold">{symbol.toUpperCase()}</h1>
          <p className="text-3xl font-bold">${prices.usd.toLocaleString()}</p>
        </div>
        <span className={`ml-2 rounded-sm bg-${changeColor.replace('text-', '')}-100 px-2 py-1 text-sm ${changeColor}`}>
          {changeSymbol}{prices.usd_24h_change.toFixed(2)}%
        </span>
      </div>
      
      <Card className="p-4">
        <Tabs defaultValue="1D">
          <TabsList className="mb-4">
            {["1H", "1D", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((period) => (
              <TabsTrigger key={period} value={period}>
                {period}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="h-[400px] w-full">
            <TradingViewChart symbol={symbol} />
          </div>
        </Tabs>
      </Card>

      <CoinTabs />
      <PerformanceSection prices={prices} />
      <SentimentSection />
      <AboutSection />
      <TokenomicsSection />
      <TeamSection />
      <TrendingCarousel title="You May Also Like" coins={trendingCoins} />
      <TrendingCarousel title="Trending Coins" coins={trendingCoins} />
    </div>
  )
} 