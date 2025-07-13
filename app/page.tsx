import { AppWindow, Code, Paintbrush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const summaryData = [
    { label: "アプリ", value: 0, icon: AppWindow },
    { label: "レシピ", value: 0, icon: Code },
    { label: "デザイン", value: 1, icon: Paintbrush },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
      <Card className="shadow-lg sm:col-span-12 md:col-span-6">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-lg font-semibold">サマリー</h2>
          <ul className="grid md:grid-cols-3 gap-3">
            {summaryData.map((data) => (
              <li
                key={data.label}
                className="flex flex-col border rounded-lg p-4 items-center border-muted"
              >
                <data.icon size={40} className="block" />
                <h2 className="font-semibold text-xl">{data.label}</h2>
                <p className="font-semibold text-3xl">{data.value}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
