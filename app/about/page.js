import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import FounderSection from "@/components/about/FounderSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <FounderSection />
    </>
  );
}