import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <OrganizationJsonLd />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
