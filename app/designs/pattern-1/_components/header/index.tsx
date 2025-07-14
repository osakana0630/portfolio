import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/designs/pattern-1/_components/ui/button";

export function Header() {
  return (
    <header className="container flex items-center mx-auto py-8 max-w-[1110px]">
      <h1 className="text-2xl font-bold">
        <Link href="/designs/pattern-1">
          <Image
            src={"/pattern1/header-logo.svg"}
            alt=""
            width={131}
            height={33}
          />
        </Link>
      </h1>
      <span className="flex-1"></span>

      <nav>
        <ul className="flex">
          <li>
            <Button variant="ghost" asChild className="text-muted-foreground">
              <Link href="/designs/pattern-1">Home</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <Button className="ml-7">Download Template</Button>
    </header>
  );
}
