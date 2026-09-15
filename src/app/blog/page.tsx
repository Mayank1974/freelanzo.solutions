import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Engineering & Full-Stack Development Blog | Freelanzo Solutions",
  description:
    "Insights on hiring freelance full-stack developers, MVP development, React vs Next.js, and SaaS architecture for startups and engineering leads.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    title: "Startup Engineering & Full-Stack Development Blog | Freelanzo Solutions",
    description:
      "Insights on hiring freelance full-stack developers, MVP development, React vs Next.js, and SaaS architecture for startups and engineering leads.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-gradient-mesh border-b border-foreground/10">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
              Engineering Insights & Guides
            </span>

            {/* Single H1 for Blog Page */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Full-Stack Software Engineering Blog
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Actionable guides for startup founders on MVP development, hiring freelance full-stack engineers, Next.js optimization, and cloud architecture.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="glass rounded-3xl overflow-hidden flex flex-col border border-foreground/10 hover:border-accent/40 transition-all duration-300 group"
                >
                  <div className="relative h-64 w-full bg-foreground/5 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-accent border border-foreground/10">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-grow">
                      {post.summary}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:translate-x-1 transition-transform mt-auto"
                    >
                      Read Full Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
