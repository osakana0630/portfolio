import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Rocket } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "@/constants/nav-links";

export function Header() {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center container gap-4">
        {/* ロゴ */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="flex items-center gap-3">
            <Rocket /> Works
          </Link>
        </h1>

        <span className="flex-1" />

        {/* PC用ナビゲーション */}
        <nav className="hidden lg:block">
          <ul className="flex gap-2">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <Button
                  variant="ghost"
                  asChild
                  className="font-semibold text-base"
                >
                  <Link href={nav.href}>{nav.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ダークモード切り替え */}
        <ModeToggle />

        {/* SP/TB用のナビゲーション */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
