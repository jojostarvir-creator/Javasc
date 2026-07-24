import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import LoadingScreen from "@/components/ui/LoadingScreen";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Testimonials  = dynamic(() => import("@/components/sections/Testimonials"));
const GitHubStats   = dynamic(() => import("@/components/sections/GitHubStats"));
const Contact       = dynamic(() => import("@/components/sections/Contact"));
const BottomSection = dynamic(() => import("@/components/sections/BottomSection"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <LoadingScreen />
      <WhatsAppFloat />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <GitHubStats />
        <Contact />
        <BottomSection />
      </main>
      <Footer />
    </>
  );
}
