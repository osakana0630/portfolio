import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const skills = [
    { label: "言語", values: ["JavaScript", "TypeScript", "Ruby", "PHP"] },
    {
      label: "ライブリ・フレームワーク",
      values: ["React", "Next.js", "Nest.js", "Ruby on Rails", "Laravel"],
    },
    {
      label: "スタイリング",
      values: ["Tailwind CSS", "CSS Modules", "Styled Components"],
    },
    { label: "DB", values: ["MySQL", "PostgreSQL"] },
    { label: "クラウド", values: ["AWS", "GCP"] },
    { label: "その他", values: ["Docker"] },
  ];
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-center items-center bg-muted p-12">
        <Avatar className="size-48 mb-5">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold mb-1">テスト太郎</h1>
        <p className="text-sm text-muted-foreground">ソフトウェアエンジニア</p>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">技術スタック</h2>
        {skills.map((skill) => (
          <div key={skill.label}>
            <h3 className="text-base font-semibold mb-1">{skill.label}</h3>
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

      <Separator />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">経歴</h2>
        <ul className="space-y-3">
          <li>
            <h3 className="text-base font-semibold">株式会社A</h3>
            <p className="text-sm text-muted-foreground">2020/04 - 2021/03</p>
            <p className="text-sm">フロントエンドエンジニア</p>
          </li>
          <li>
            <h3 className="text-base font-semibold">株式会社B</h3>
            <p className="text-sm text-muted-foreground">2021/04 - 現在</p>
            <p className="text-sm">バックエンドエンジニア</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
