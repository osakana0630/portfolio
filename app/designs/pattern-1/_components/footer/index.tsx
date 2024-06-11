import logo from "@/app/designs/pattern-1/_components/footer/assets/logo.svg";
import x from "@/app/designs/pattern-1/_components/footer/assets/x.svg";
import linkedIn from "@/app/designs/pattern-1/_components/footer/assets/linkedin.svg";
import discord from "@/app/designs/pattern-1/_components/footer/assets/discord.svg";
import Image from "next/image";
import { Button } from "@/app/designs/pattern-1/_components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#18181C]">
      <div className="mx-auto flex items-center py-14 max-w-[1110px]">
        <div>
          <h3 className="mb-5">
            <Image src={logo} alt="" width={56} height={45} />
          </h3>
          <p className="text-[14px] leading-[28px] text-[#9E9E9E]">
            A good design is not only aesthetically
            <br />
            pleasing, but also functional. It should be
            <br />
            able to solve the problem
          </p>
        </div>

        <span className="flex-1"></span>

        <nav className="space-y-2">
          <h3 className="font-semibold text-[16px] text-white">Sections</h3>
          <div className="flex gap-28">
            <ul className="flex flex-col gap-3 text-[14px] text-[#9E9E9E]">
              <li>Home</li>
              <li>Section one</li>
              <li>Section two</li>
              <li>Section three</li>
            </ul>
            <ul className="flex flex-col gap-3 text-[14px] text-[#9E9E9E]">
              <li>Home</li>
              <li>Section one</li>
              <li>Section two</li>
              <li>Section three</li>
            </ul>
            <ul className="flex flex-col gap-3 text-[14px] text-[#9E9E9E]">
              <li>Home</li>
              <li>Section one</li>
              <li>Section two</li>
              <li>Section three</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="bg-black">
        <div className="flex items-center max-w-[1110px] mx-auto py-8">
          <p className="text-[#9E9E9E] text-[14px] leading-[28px]">
            All Rights Reservd Inkyy.com 2022
          </p>
          <span className="flex-1"></span>
          <ul className="flex gap-2">
            <li>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image src={x} unoptimized alt="x" />
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image src={linkedIn} unoptimized alt="linkedIn" />
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image src={discord} unoptimized alt="discord" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
