'use client';

import { Card } from "@/components/ui/card";
import { PieChart } from 'react-minimal-pie-chart';

export function TokenomicsSection() {
  const tokenDistribution = [
    { title: 'Crowdsale investors', value: 80, color: '#0082FF' },
    { title: 'Foundation', value: 20, color: '#FFA723' },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Tokenomics</h2>

        <div>
          <h3 className="text-xl font-bold mb-4">Initial Distribution</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Donut Chart */}
            <div className="w-48 h-48 mx-auto md:mx-0">
              <PieChart
                data={tokenDistribution}
                lineWidth={20}
                paddingAngle={2}
                rounded
                startAngle={-90}
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelStyle={{
                  fontSize: '8px',
                  fontFamily: 'sans-serif',
                  fill: '#fff',
                }}
                labelPosition={75}
              />
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {tokenDistribution.map((item) => (
                <div key={item.title} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">
                    {item.title}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </Card>
  );
} 