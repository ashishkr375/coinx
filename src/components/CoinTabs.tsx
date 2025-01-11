'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Overview", href: "#overview" },
  { name: "Fundamentals", href: "#fundamentals" },
  { name: "News Insights", href: "#news" },
  { name: "Sentiments", href: "#sentiments" },
  { name: "Team", href: "#team" },
  { name: "Technicals", href: "#technicals" },
  { name: "Tokenomics", href: "#tokenomics" },
];

export function CoinTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="flex overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn(
              "px-4 py-2 text-sm font-medium border-b-2 whitespace-nowrap",
              pathname === tab.href
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 