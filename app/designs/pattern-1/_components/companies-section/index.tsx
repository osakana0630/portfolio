import Image from "next/image";
import { Button } from "@/app/designs/pattern-1/_components/ui/button";
import alisa from "./assets/alisa.svg";
import freeTrial from "./assets/free-trial.svg";
import happy from "./assets/happy.svg";
import natural from "./assets/natural.svg";
import smile from "./assets/smile.svg";
import urban from "./assets/urban.svg";
import wave from "./assets/wave.svg";

const companies = [
  { img: smile, name: "smile" },
  { img: urban, name: "urban" },
  { img: natural, name: "natural" },
  { img: wave, name: "wave" },
  { img: happy, name: "happy" },
  {
    img: alisa,
    name: "alisa",
  },
];
export function CompaniesSection() {
  return (
    <div className="relative pt-[110px] pb-[300px] bg-[#18181C]">
      <div className="mx-auto max-w-[1110px] text-center">
        <h2 className="text-5xl font-semibold leading-[64px] text-white">
          Companies we Worked
          <br />
          With in Since 2015
        </h2>
        <ul className="mt-[70px] flex gap-[30px]">
          {companies.map((company) => (
            <li
              key={company.name}
              className="flex justify-center items-center p-7 bg-black rounded-[10px]"
            >
              <Image src={company.img} alt="" width={101} height={37} />
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={freeTrial}
        alt="love our Tool? fell free to join our 15 days free trial"
        width={1110}
        height={425}
        className="absolute left-1/2 -translate-x-1/2 -bottom-[200px]"
      />
      <Button
        variant="secondary"
        className="absolute left-[190px] -bottom-[130px]"
      >
        Download Template
      </Button>
    </div>
  );
}
