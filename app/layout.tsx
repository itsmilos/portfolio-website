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

export const metadata: Metadata = {
  title: "Milos | Full-Stack Web Developer",
  description:
    "I build digital products, web applications, and interfaces designed to be used.",

  openGraph: {
    title: "Milos | Full-Stack Web Developer",
    description:
      "Full-stack developer building modern websites, web apps, and digital products.",
    url: "https://devbym.com",
    siteName: "Milos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milos | Full-Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Milos | Full-Stack Web Developer",
    description:
      "Full-stack developer building modern websites, web apps, and digital products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
