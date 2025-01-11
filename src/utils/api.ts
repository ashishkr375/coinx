import { CoinData } from '@/types';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
const CACHE_TIME = 60 * 1000; // 1 minute

if (!API_KEY) {
  throw new Error('CoinGecko API key is not defined');
}

let cache: { [key: string]: { data: any; timestamp: number } } = {};

async function fetchWithCache(url: string) {
  const urlWithKey = `${url}${url.includes('?') ? '&' : '?'}x_cg_demo_api_key=${API_KEY}`;

  if (cache[url] && Date.now() - cache[url].timestamp < CACHE_TIME) {
    return cache[url].data;
  }

  try {
    const response = await fetch(urlWithKey, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60 // Revalidate every minute
      }
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    cache[url] = { data, timestamp: Date.now() };
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

export async function getCoinPrice(id: string = 'bitcoin') {
  return fetchWithCache(
    `${COINGECKO_API}/simple/price?ids=${id}&vs_currencies=inr,usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
  );
}

export async function getTrendingCoins() {
  const data = await fetchWithCache(`${COINGECKO_API}/search/trending`);
  
  // Fetch additional data for trending coins
  const trendingCoinsData = await Promise.all(
    data.coins.map(async (coin: TrendingCoin) => {
      const priceData = await fetchWithCache(
        `${COINGECKO_API}/simple/price?ids=${coin.item.id}&vs_currencies=usd&include_24hr_change=true&include_sparkline=true`
      );
      
      return {
        ...coin,
        item: {
          ...coin.item,
          data: {
            price: priceData[coin.item.id]?.usd || '0',
            price_change_percentage_24h: {
              usd: priceData[coin.item.id]?.usd_24h_change || 0
            },
            sparkline: coin.item.thumb // Using thumb as placeholder, ideally we'd get actual sparkline data
          }
        }
      };
    })
  );

  return trendingCoinsData;
}

export async function getCoinData(id: string = 'bitcoin'): Promise<CoinData> {
  try {
    const [priceData, trendingData] = await Promise.all([
      getCoinPrice(id),
      getTrendingCoins(),
    ]);
    
    if (!priceData[id]) {
      throw new Error(`No price data found for ${id}`);
    }

    return {
      prices: priceData[id],
      trending: trendingData,
    };
  } catch (error) {
    console.error('Error fetching coin data:', error);
    throw error;
  }
} 