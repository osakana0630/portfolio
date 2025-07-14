import Image from "next/image";
import { features } from "@/app/designs/pattern-1/_components/feature-section/features";
import { Button } from "@/app/designs/pattern-1/_components/ui/button";
import { cn } from "@/lib/utils";
import featureSectionSvg from "./assets/feature-section.svg";

export function FeatureSection() {
  return (
    <div className="mx-auto max-w-[1110px] mt-12">
      <h2 className="font-semibold text-[48px] text-white">Feature Boxes</h2>
      <p className="mt-[5px] text-[18px] leading-[28px] text-[#9E9E9E]">
        A good design is not only aesthetically pleasing, but also
        <br /> functional. It should be able to solve the problem
      </p>

      <ul className="grid grid-cols-3 gap-[30px] mt-[38px]">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex flex-col justify-center items-center text-center rounded-[20px] bg-[#18181C] py-[48px] px-[24px]"
          >
            <div
              className={cn(
                "w-[104px] h-[104px] flex justify-center items-center bg-[#222228] rounded-[30px]",
                feature.isEmphasized &&
                  "bg-linear-to-r from-[#FF9898] to-[#8054FF]",
              )}
            >
              <Image src={feature.icon} alt="" width={45} height={44} />
            </div>
            <h3 className="mt-[39px] text-[20px] font-semibold leading-[32px] text-white">
              {feature.title}
            </h3>
            <p className="mt-[15px] text-[#9E9E9E] text-[14px] leading-[28px]">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex mt-[31px] gap-[24px]">
        <Image
          src={featureSectionSvg}
          unoptimized
          alt=""
          width={678}
          height={678}
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-[48px] font-semibold leading-[64px] text-white">
            We&apos;re here to guide and help you at all times
          </h2>
          <p className="mt-[12px] text-[#9E9E9E]">
            A good design is not only aesthetically
            <br />
            pleasing, but also functional. It should be
            <br /> able to solve the problem
          </p>
          <Button className="w-fit mt-[30px]">Download</Button>
        </div>
      </div>
    </div>
  );
}
