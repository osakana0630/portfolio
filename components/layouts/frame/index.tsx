import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type FrameProps = {
  children: React.ReactNode;
  backlinkProps?: {
    label: string;
    href: string;
  };
};
export function Frame({ children, backlinkProps }: FrameProps) {
  return (
    <>
      <header className="flex items-center gap-6 h-14 border-muted bg-muted rounded-t-lg p-4 border">
        <div className="flex items-center gap-1">
          <div className="size-4 border rounded-full bg-red-400" />
          <div className="size-4 border rounded-full bg-yellow-400" />
          <div className="size-4 border rounded-full bg-green-400" />
        </div>

        {backlinkProps && (
          <div>
            <Button
              variant="ghost"
              asChild
              className="hover:opacity-60 transition duration-300"
            >
              <Link
                href={backlinkProps.href}
                className="flex items-center font-semibold"
              >
                <ChevronLeft size={24} className="mr-2" />
                {backlinkProps.label}
              </Link>
            </Button>
          </div>
        )}
      </header>
      <div className="border-x border-b border-muted p-4">{children}</div>
    </>
  );
}
