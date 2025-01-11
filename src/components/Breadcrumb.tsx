'use client';

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  coinName: string;
}

export function Breadcrumb({ coinName }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <Link href="/" className="hover:text-gray-900">
        Cryptocurrencies
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-gray-900">{coinName}</span>
    </div>
  );
} 