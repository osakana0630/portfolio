"use client";

import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Empty() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-6 border rounded-lg bg-muted p-12">
      <div className="text-center flex flex-col items-center gap-2">
        <Rocket className="size-24 lg:size-28" />
        <h2 className="text-lg lg:text-xl font-semibold">
          データがありません。
        </h2>
      </div>

      <Button onClick={() => router.back()} className="w-fit">
        以前のページに戻る
      </Button>
    </div>
  );
}
