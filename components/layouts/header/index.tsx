import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Rocket } from "lucide-react";

const headerNavs = [
  {
    href: "/developer",
    label: "開発者紹介",
  },
  {
    href: "/products",
    label: "アプリ",
  },
  {
    href: "/recipes",
    label: "レシピ",
  },
  {
    href: "/designs",
    label: "デザイン",
  },
];

export function Header() {
  return (
    <header className="border-b">
      <div className="h-16 flex items-center container gap-4">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="flex items-center gap-3">
            <Rocket /> Works
          </Link>
        </h1>
        <span className="flex-1" />
        <nav>
          <ul className="flex gap-2">
            {headerNavs.map((nav) => (
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
        <ModeToggle />
      </div>
    </header>
  );
}
