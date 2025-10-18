"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { navLinks } from "@/constants/nav-links";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5">
        <VisuallyHidden>
          <SheetTitle>ナビゲーションメニュー</SheetTitle>
        </VisuallyHidden>
        <ul className="flex flex-col gap-1">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Button
                variant="ghost"
                asChild
                aria-label="メニュー"
                className="w-full justify-start text-base font-semibold"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
