import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/og-image.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Remote",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629",
    },
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
    ],
    knowsAbout: SITE_CONFIG.keywords,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web & SaaS Development",
            description: "End-to-end full-stack development using React, Next.js, Spring Boot, and AWS.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Modern Frontend Web Development",
            description: "High-speed, SEO-optimized React and Next.js user interfaces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Engineering & API Systems",
            description: "Scalable Java Spring Boot & Node.js backend microservices and REST APIs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AWS Cloud Infrastructure & DevOps",
            description: "CI/CD pipelines, Docker containerization, and AWS cloud hosting setup.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/images/logo.png`,
    },
    areaServed: "Worldwide",
    serviceType: "Freelance Full Stack Software Engineering",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  publishedAt,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`,
    image: image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
