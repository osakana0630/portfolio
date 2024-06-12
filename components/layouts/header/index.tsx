import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Rocket } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "@/constants/nav-links";
import { ActiveLink } from "@/components/active-link";

export function Header() {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center container gap-8">
        {/* ロゴ */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="flex items-center gap-3">
            <Rocket /> Works
          </Link>
        </h1>

        <span className="flex-1" />

        {/* PC用ナビゲーション */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <ActiveLink href={nav.href} label={nav.label} />
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
