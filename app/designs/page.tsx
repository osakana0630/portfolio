import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

const designs = [
  {
    title: "Figmaテンプレートを使ってデザインを作成する",
    image: "/pattern1.png",
    href: "/designs/pattern-1",
  },
];

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {designs.map((design) => (
        <Card
          className="relative hover:bg-accent hover:shadow-lg transition duration-300 transform hover:scale-105"
          key={design.title}
        >
          <CardContent className="p-4 space-y-2">
            <div className="relative w-full aspect-video border-muted bg-muted overflow-hidden rounded-lg">
              <Image src={design.image} fill alt="" className="object-cover" />
            </div>

            <div>
              <Link href={design.href}>
                <h2 className="font-semibold text-lg line-clamp-2">
                  {design.title}
                </h2>
                <span className="absolute inset-0" />
              </Link>
              <time className="text-muted-foreground text-sm flex items-center">
                <CalendarDays size={16} className="mr-1" />
                {format(new Date(), "yyyy/MM/dd")}
              </time>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
