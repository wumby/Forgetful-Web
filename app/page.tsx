import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";

export default function Home() {
  return (
    <div className="app-page">
      <Hero />
      <ScreenshotsSection />
      <InfoSection />
    </div>
  );
}
