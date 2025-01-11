'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">About Bitcoin</h2>

        {/* What is Bitcoin */}
        <div>
          <h3 className="text-xl font-bold mb-4">What is Bitcoin?</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>
        </div>

        {/* Lorem ipsum section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
            </p>
            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
            </p>
          </div>
        </div>

        {/* Already Holding Bitcoin? */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Calculate your Profits</h3>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 mt-4">
                  Check Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Image
                src="https://i.postimg.cc/Gmv40fmM/image.png"
                alt="Calculate Profits"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-red-500 to-red-700 text-white">
            <div className="flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Calculate your tax liability</h3>
                <Button className="bg-white text-red-600 hover:bg-red-50 mt-4">
                  Check Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Image
                src="https://i.postimg.cc/Gmv40fmM/image.png"
                alt="Calculate Tax"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
          </Card>
        </div>

        <p className="text-gray-600">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>
    </Card>
  );
} 