import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.postimg.cc/B6KRSRXz/image.png"
              alt="KoinX Logo"
              width={86}
              height={24}
              className="h-6 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/crypto-taxes"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Crypto Taxes
            </Link>
            <Link
              href="/free-tools"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Free Tools
            </Link>
            <Link
              href="/resource-center"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Resource Center
            </Link>
          </nav>
        </div>
        <Button>Get Started</Button>
      </div>
    </header>
  )
}

