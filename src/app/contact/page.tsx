import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Freelanzo Solutions | Freelance Web Developers",
  description:
    "Get in touch with Freelanzo Solutions for custom React, Next.js, Spring Boot, and AWS full-stack development. Book a free 15-minute consultation today!",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact Freelanzo Solutions | Freelance Web Developers",
    description:
      "Get in touch with Freelanzo Solutions for custom React, Next.js, Spring Boot, and AWS full-stack development. Book a free 15-minute consultation today!",
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
