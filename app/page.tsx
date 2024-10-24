import HeroSection from "@/components/home/hero-section";
import TechnologyStack from "@/components/home/tech-stack";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TechnologyStack />
      </main>
    </div>
  );
}
