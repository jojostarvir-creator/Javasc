import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contact — Donald Fambo | Développeur Web & Mobile",
  description:
    "Contactez Donald Fambo, développeur web & mobile full stack basé au Bénin, pour discuter de votre projet.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
