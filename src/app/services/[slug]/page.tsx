import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { SERVICES_DATA, SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `${SITE_CONFIG.url}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <ServiceJsonLd
        name={service.title}
        description={service.fullDesc}
        url={`/services/${service.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 bg-gradient-mesh border-b border-foreground/10">
          <div className="container mx-auto px-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>

            <span className="block text-accent font-bold tracking-widest uppercase text-xs mb-3">
              {service.category}
            </span>

            {/* H1 Tag containing specific service primary keyword */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed mb-10">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-foreground/10 border border-foreground/10 rounded-full text-sm font-semibold text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-xl shadow-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              Discuss Your {service.title} Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">
                Key Features & Technical Capabilities
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="glass p-6 rounded-2xl border border-foreground/10 flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
