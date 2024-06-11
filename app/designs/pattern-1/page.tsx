import { Frame } from "@/components/layouts/frame";
import { Header } from "@/app/designs/pattern-1/_components/header";
import { Footer } from "@/app/designs/pattern-1/_components/footer";
import { HeroSection } from "@/app/designs/pattern-1/_components/hero-section";
import { FeatureSection } from "@/app/designs/pattern-1/_components/feature-section";
import { CompaniesSection } from "@/app/designs/pattern-1/_components/companies-section";
import { ContactSection } from "@/app/designs/pattern-1/_components/contact-section";

export default function Page() {
  return (
    <Frame>
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
