import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Freelanzo Solutions",
  description:
    "Find answers to common questions about our freelance full-stack development services, technologies (React, Next.js, Spring Boot, AWS), timelines, and pricing.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Freelanzo Solutions",
    description:
      "Find answers to common questions about our freelance full-stack development services, technologies (React, Next.js, Spring Boot, AWS), timelines, and pricing.",
    url: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FAQPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />
      <main className="flex-grow">
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
