import { getCoinData } from '@/utils/api';
import { PriceChart } from '@/components/PriceChart';
import { Sidebar } from '@/components/Sidebar';

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
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <PriceChart symbol={coinId} prices={data.prices} />
        </div>
        <div>
          <Sidebar trendingCoins={data.trending} />
        </div>
      </div>
    </div>
  );
} 