import Contact from "@/components/Contact/Contact";
import Project from "@/components/Project/Project";
import Resume from "@/components/Resume/Resume";
import Services from "@/components/Services/Services";
import Aside from "@/components/Shared/Aside";
import { SideNavbar } from "@/components/Shared/SideNavbar";
import HeroSection from "@/components/home/heroSection";

export default function Home() {
  return (
    <div className="xl:grid xl:grid-flow-col gap-3 scroll-smooth">
      <div className="xl:grid-cols-2 fixed top-4 xl:static">
        <Aside />
      </div>
      <div className="xl:grid-cols-8 space-y-4 relative">
        <SideNavbar></SideNavbar>
        <HeroSection />
        <Services />
        <Resume />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
