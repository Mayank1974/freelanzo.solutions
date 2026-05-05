import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mayank Chauhan | Full-Stack Developer & Freelancer",
  description: "Professional freelancing services from building high-performance websites to complete deployment and maintenance. Crafting digital experiences that scale.",
  keywords: ["Freelance Developer", "Web Design", "Next.js", "React", "Full Stack Development", "Deployment"],
  authors: [{ name: "Mayank Chauhan" }],
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
