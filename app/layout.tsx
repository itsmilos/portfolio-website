import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const siteUrl = "https://devbym.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Milos Lazendic | Full Stack Developer",
  description:
    "Full-stack developer building fast, custom web applications with React, Next.js and Node.js. From idea and design to deployment.",
  applicationName: "Milos Lazendic",
  authors: [{ name: "Milos Lazendic", url: siteUrl }],
  creator: "Milos Lazendic",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Milos Lazendic | Full Stack Developer",
    description:
      "Full-stack developer building modern websites, web apps, and digital products.",
    url: siteUrl,
    siteName: "Milos Lazendic",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milos Lazendic | Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milos Lazendic | Full Stack Developer",
    description:
      "Full-stack developer building modern websites, web apps, and digital products.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Milos Lazendic",
  alternateName: ["Miloš Lazendić"],
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  sameAs: [
    "https://github.com/itsmilos",
    "https://www.linkedin.com/in/milos-lazendic-b45b3841a/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
