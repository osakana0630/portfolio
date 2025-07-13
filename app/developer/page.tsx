import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { socialLinks, skills, careers } from "@/constants/developer";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-center items-center bg-muted/50 backdrop-blur p-12 rounded-lg">
        <Avatar className="size-40 md:size-48 mb-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold mb-1">Imai Naoya</h1>
        <p className="text-sm text-muted-foreground mb-6">
          ソフトウェアエンジニア
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="icon"
              asChild
              className="dark:bg-white"
            >
              <a href={link.href}>
                <Image src={link.icon} width={20} height={20} alt="" />
                <span className="sr-only" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">経歴</h2>
        <ul className="space-y-3">
          {careers.map((career) => (
            <li key={career.company}>
              <h3 className="text-base font-semibold">{career.company}</h3>
              <p className="text-sm text-muted-foreground">
                {career.period}（{career.type}）
              </p>
              <p className="text-sm">{career.position}</p>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">技術スタック</h2>
        {skills.map((skill) => (
          <div key={skill.label}>
            <h3 className="text-sm font-semibold mb-1">{skill.label}</h3>
            <ul className="flex flex-wrap gap-3">
              {skill.values.map((value) => (
                <li key={value}>
                  <Badge>{value}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
