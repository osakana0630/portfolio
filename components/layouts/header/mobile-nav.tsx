"use client";

import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/constants/nav-links";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5">
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>ナビゲーションメニュー</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>
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
