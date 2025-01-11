import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight, TrendingUp } from 'lucide-react'
import { TrendingCoin } from "@/types"

interface SidebarProps {
  trendingCoins: TrendingCoin[];
}

export function Sidebar({ trendingCoins }: SidebarProps) {
  return (
    <div className="space-y-6 justify-center text-center">
      <Card className="bg-blue-600 p-6 text-white">
        <h2 className="mb-4 text-2xl font-bold">
          Get Started with KoinX for FREE
        </h2>
        <p className="mb-6 text-blue-100">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <Image
          src="https://i.postimg.cc/Gmv40fmM/image.png"
          width={240}
          height={160}
          alt="KoinX Features"
          className="mx-auto mb-6"
        />
        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
          Get Started for FREE <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Trending Coins (24h)</h2>
        </div>
        <div className="space-y-4">
          {trendingCoins.slice(0, 3).map((coin) => {
            const priceChange = coin.item.data?.price_change_percentage_24h?.usd || 0;
            const changeColor = priceChange >= 0 ? 'text-green-600' : 'text-red-600';
            const changeSymbol = priceChange >= 0 ? '+' : '';

            return (
              <div key={coin.item.id} className="flex items-center justify-between">
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
                <span className={`rounded-sm bg-${changeColor.replace('text-', '')}-100 px-2 py-1 text-sm ${changeColor}`}>
                  {changeSymbol}{priceChange.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  )
} 