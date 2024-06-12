"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/nav-links";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-4/5">
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
