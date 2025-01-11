import { getCoinData } from '@/utils/api';
import { PriceChart } from '@/components/PriceChart';
import { Sidebar } from '@/components/Sidebar';
import { TrendingCarousel } from '@/components/TrendingCarousel'

interface PageProps {
  params: {
    coinId: string;
  };
}

export default async function CoinPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const coinId = resolvedParams.coinId || 'bitcoin';
  
  const data = await getCoinData(coinId);

  return (
    <div className="bg-white min-h-screen">
      <div className="container py-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <PriceChart 
              symbol={coinId} 
              prices={data.prices} 
              trendingCoins={data.trending}
            />
          </div>
          <div className="space-y-6">
            <Sidebar trendingCoins={data.trending} />
          </div>
          
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
          <TrendingCarousel title="You May Also Like" coins={data.trending} />
      <TrendingCarousel title="Trending Coins" coins={data.trending} />
      </div>
    </div>
  );
} 