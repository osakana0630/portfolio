"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
};
export function ActiveLink({ href, label }: Props) {
  const pathname = usePathname();

  const isActive = () => {
    const parentSegment = href.split("/")[1];
    return pathname.includes(parentSegment);
  };

  return (
    <Link
      href={href}
      className={cn("font-semibold text-lg", isActive() && "text-orange-500")}
    >
      {label}
    </Link>
  );
}
