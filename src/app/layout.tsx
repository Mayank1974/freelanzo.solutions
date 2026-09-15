import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_CONFIG } from "@/lib/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Freelance Full-Stack Development Services | Freelanzo Solutions",
    template: "%s | Freelanzo Solutions",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Freelanzo Solutions", url: SITE_CONFIG.url }],
  creator: "Freelanzo Solutions",
  publisher: "Freelanzo Solutions",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Freelance Full-Stack Development Services | Freelanzo Solutions",
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Freelanzo Solutions - Full-Stack Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Full-Stack Development Services | Freelanzo Solutions",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@FreelanzoSol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-accent/30 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
