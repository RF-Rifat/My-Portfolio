import Contact from "@/components/Contact/Contact";
import Resume from "@/components/Resume/Resume";
import Services from "@/components/Services/Services";
import Aside from "@/components/Shared/Aside";
import HeroSection from "@/components/home/heroSection";

export default function Home() {
  return (
    <div className="xl:grid xl:grid-flow-col gap-3">
      <div className="xl:grid-cols-2 fixed top-4 xl:static">
        <Aside />
      </div>
      <div className="xl:grid-cols-8 mt-4 space-y-4">
        <HeroSection />
        <Services />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
