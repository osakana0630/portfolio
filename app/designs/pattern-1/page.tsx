import { CircleAlert, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CompaniesSection } from "@/app/designs/pattern-1/_components/companies-section";
import { ContactSection } from "@/app/designs/pattern-1/_components/contact-section";
import { FeatureSection } from "@/app/designs/pattern-1/_components/feature-section";
import { Footer } from "@/app/designs/pattern-1/_components/footer";
import { Header } from "@/app/designs/pattern-1/_components/header";
import { HeroSection } from "@/app/designs/pattern-1/_components/hero-section";
import { Frame } from "@/components/layouts/frame";

export default function Page() {
  return (
    <Frame
      backlinkProps={{
        label: "デザイン一覧",
        href: "/designs",
      }}
    >
      <div className="mb-5">
        <h2 className="text-lg font-semibold">参考リンク</h2>
        <ul>
          <li className="inline-block">
            <Link
              href="https://www.figma.com/community/file/1158321567797278039"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline flex items-center gap-1"
            >
              figma free template
              <ExternalLink size={18} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block  border border-muted rounded-lg bg-black">
        <Header />
        <main>
          <HeroSection />
          <FeatureSection />
          <CompaniesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      <div className="lg:hidden">
        <p className="text-muted-foreground font-semibold text-sm flex items-center gap-2 border bg-muted p-5 rounded-lg">
          <CircleAlert size={20} />
          レスポンシブ対応していません。PCでご覧ください。
        </p>
      </div>
    </Frame>
  );
}
