import { Frame } from "@/components/layouts/frame";
import { Header } from "@/app/designs/pattern-1/_components/header";
import { Footer } from "@/app/designs/pattern-1/_components/footer";
import { HeroSection } from "@/app/designs/pattern-1/_components/hero-section";
import { FeatureSection } from "@/app/designs/pattern-1/_components/feature-section";
import { CompaniesSection } from "@/app/designs/pattern-1/_components/companies-section";
import { ContactSection } from "@/app/designs/pattern-1/_components/contact-section";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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

      <div className="border border-muted rounded-lg bg-black">
        <Header />
        <main>
          <HeroSection />
          <FeatureSection />
          <CompaniesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Frame>
  );
}
