'use client';

import { Card } from "@/components/ui/card";
import { ChevronRight, Info, TrendingUp, Newspaper } from 'lucide-react';

export function SentimentSection() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Sentiment</h2>

        {/* Key Events */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Key Events</h3>
            <Info className="h-4 w-4 text-gray-400" />
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {/* Event Card 1 */}
            <div className="min-w-[456px] p-4 bg-blue-50 rounded-xl flex gap-4">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Newspaper className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim.
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
                </p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="min-w-[456px] p-4 bg-green-50 rounded-xl flex gap-4">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-medium mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim.
                </h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analyst Estimates */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Analyst Estimates</h3>
            <Info className="h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center gap-8">
            <div className="h-36 w-36 rounded-full bg-green-50 flex items-center justify-center">
              <span className="text-3xl font-bold text-green-600">76%</span>
            </div>

            <div className="flex-1 space-y-4">
              {/* Buy */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Buy</span>
                <div className="flex-1 h-2 bg-green-500 rounded" style={{ width: '76%' }} />
                <span className="w-12 text-sm text-gray-500">76%</span>
              </div>

              {/* Hold */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Hold</span>
                <div className="flex-1 h-2 bg-gray-200 rounded" style={{ width: '8%' }} />
                <span className="w-12 text-sm text-gray-500">8%</span>
              </div>

              {/* Sell */}
              <div className="flex items-center gap-8">
                <span className="w-8 text-sm text-gray-500">Sell</span>
                <div className="flex-1 h-2 bg-red-500 rounded" style={{ width: '16%' }} />
                <span className="w-12 text-sm text-gray-500">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 