import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";
import BottomSection from "@/components/sections/BottomSection";
import LoadingScreen from "@/components/ui/LoadingScreen";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
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
        <Blog />
        <Contact />
        <BottomSection />
      </main>
      <Footer />
    </>
  );
}
