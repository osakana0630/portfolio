import Image from "next/image";
import { Button } from "@/app/designs/pattern-1/_components/ui/button";
import nextConfig from "../../../../../next.config";

const BASE_PATH = nextConfig.basePath || "";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="py-20 max-w-[749px] mx-auto text-center">
        <h2 className="text-[64px] font-semibold leading-[80px] text-white">
          Beautiful Landing Page Design for You
        </h2>
        <p className="mt-[18px] text-[#9E9E9E] leading-7">
          A good design is not only aesthetically pleasing, but also
          <br />
          functional. It should be able to solve the problem
        </p>
        <Button className="mt-[25px]">Download Template</Button>
        <Image
          src={`${BASE_PATH}/pattern1/hero.png`}
          alt=""
          className="relative z-10 mt-[70px]"
          width={18}
          height={18}
        />
      </div>
      <Image
        src={`${BASE_PATH}/pattern1/hero-bg.svg`}
        alt=""
        unoptimized
        className="absolute inset-0 mx-auto"
        width={18}
        height={18}
      />
      <Image
        src={`${BASE_PATH}/pattern1/separator.svg`}
        alt=""
        unoptimized
        className="absolute inset-x-0 -bottom-[50px]"
        width={18}
        height={18}
      />
    </div>
  );
}
