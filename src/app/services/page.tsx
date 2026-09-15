import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Freelance Software Development Services | Freelanzo Solutions",
  description:
    "Explore expert freelance web development services including React, Next.js, Spring Boot, and AWS cloud solutions. Request a free technical consultation today!",
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: "Freelance Software Development Services | Freelanzo Solutions",
    description:
      "Explore expert freelance web development services including React, Next.js, Spring Boot, and AWS cloud solutions. Request a free technical consultation today!",
    url: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />
      <main className="flex-grow">
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
