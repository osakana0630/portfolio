import sphere from "./assets/sphere.svg";
import Image from "next/image";
import { ContactForm } from "@/app/designs/pattern-1/_components/feature-section/contact-form";
export function ContactSection() {
  return (
    <div className="pt-[230px] flex items-center  mx-auto max-w-[1110px]">
      <Image src={sphere} alt="" width={582} height={628} />

      <div className="flex flex-col text-left">
        <h2 className="font-semibold text-[48px]">Get In Touch</h2>
        <p className="mt-[5px] text-[18px] leading-[28px] text-[#9E9E9E]">
          A good design is not only aesthetically pleasing, but
          <br />
          also functional. It should be able to solve the problem
        </p>

        <div className="mt-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
