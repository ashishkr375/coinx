'use client';

import { useEffect } from 'react';

interface TradingViewChartProps {
  symbol: string;
}

export default function TradingViewChart({ symbol }: TradingViewChartProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof TradingView !== 'undefined') {
        new TradingView.widget({
          autosize: true,
          symbol: `${symbol}`,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: 'tradingview_chart'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  return (
    <div className="h-[400px]">
      <div id="tradingview_chart" className="h-full" />
    </div>
  );
} 