"use client";

import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
};
export function Empty({ title = "データがありません。" }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-6 border rounded-lg bg-muted p-12">
      <div className="text-center flex flex-col items-center gap-2">
        <Rocket className="size-24 lg:size-28" />
        <h2 className="text-lg lg:text-xl font-semibold">{title}</h2>
      </div>

      <Button onClick={() => router.back()} className="w-fit">
        以前のページに戻る
      </Button>
    </div>
  );
}
