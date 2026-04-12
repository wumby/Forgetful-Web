import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import MissionSection from "@/components/MissionSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";

export default function Home() {
  return (
    <div className="app-page">
      <Hero />
      <MissionSection />
      <ScreenshotsSection />
      <InfoSection />
    </div>
  );
}
