import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { SERVICES_DATA, SITE_CONFIG } from "@/lib/constants";
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.targetKeyword, "Freelanzo Solutions", "Full Stack Development", "Freelance Software Engineer"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  // Map related services
  const relatedServiceDetails = SERVICES_DATA.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={`/blog/${post.slug}`}
        image={post.featuredImage}
        publishedAt={post.publishedAt}
        authorName={post.author.name}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />

      <main className="flex-grow">
        {/* Article Header */}
        <header className="py-16 bg-gradient-mesh border-b border-foreground/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent mb-8 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-accent mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-foreground/50">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-foreground/50">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            {/* Single H1 for the Article */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.15]">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-6 border-t border-foreground/10">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent text-sm">
                MC
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{post.author.name}</p>
                <p className="text-xs text-foreground/50">{post.author.role} • Freelanzo Solutions</p>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Body Content */}
        <article className="py-10 bg-background">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="prose dark:prose-invert max-w-none text-foreground/85 leading-relaxed space-y-6 text-lg">
              {post.content.split("\n\n").map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 tracking-tight border-b border-foreground/10 pb-3"
                    >
                      {trimmed.replace("## ", "")}
                    </h2>
                  );
                }
                if (trimmed.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3"
                    >
                      {trimmed.replace("### ", "")}
                    </h3>
                  );
                }
                if (trimmed.startsWith("---")) {
                  return <hr key={index} className="my-10 border-foreground/10" />;
                }
                if (trimmed.startsWith("- ")) {
                  const items = trimmed.split("\n- ");
                  return (
                    <ul key={index} className="space-y-2 my-4 list-none pl-0">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span>{item.replace("- ", "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (trimmed.startsWith("| ")) {
                  // Render markdown table
                  const rows = trimmed.split("\n");
                  return (
                    <div key={index} className="overflow-x-auto my-8">
                      <table className="w-full text-left text-sm border-collapse border border-foreground/10 rounded-xl overflow-hidden">
                        <tbody>
                          {rows.map((row, rIdx) => {
                            if (row.includes(":---")) return null;
                            const cells = row.split("|").filter((c) => c.trim() !== "");
                            const isHeader = rIdx === 0;
                            return (
                              <tr
                                key={rIdx}
                                className={isHeader ? "bg-foreground/10 font-bold" : "border-t border-foreground/10"}
                              >
                                {cells.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-3 border-r border-foreground/10">
                                    {cell.trim()}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                // Standard paragraph with simple link parsing if present
                return (
                  <p key={index} className="text-foreground/80 text-lg leading-relaxed">
                    {trimmed.includes("[") ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: trimmed
                            .replace(
                              /\[([^\]]+)\]\(([^)]+)\)/g,
                              '<a href="$2" class="text-accent underline font-semibold hover:text-accent/80 transition-colors">$1</a>'
                            )
                            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
                        }}
                      />
                    ) : (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'),
                        }}
                      />
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* Related Services Section */}
        {relatedServiceDetails.length > 0 && (
          <section className="py-16 bg-foreground/[0.02] border-t border-foreground/10">
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-2xl font-bold mb-8">Related Development Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedServiceDetails.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="glass p-6 rounded-2xl border border-foreground/10 hover:border-accent/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent/80 block mb-2">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform mt-auto">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
