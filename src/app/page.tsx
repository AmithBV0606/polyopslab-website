import FeaturesOne from "@/components/features-one";
import FeaturesTwo from "@/components/features-two";
import HeroSection from "@/components/hero-section";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesOne />
      <FeaturesTwo />
      <TeamSection />
      <Testimonials />
    </div>
  );
}
