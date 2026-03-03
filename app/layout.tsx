import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://james-valentine.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "James Valentine",
    template: "%s | James Valentine",
  },
  description:
    "Software engineer, educator, and dog trainer. Building things at the intersection of software, science, and applied learning.",
  openGraph: {
    title: "James Valentine",
    description:
      "Software engineer, educator, and dog trainer. Building things at the intersection of software, science, and applied learning.",
    url: SITE_URL,
    siteName: "James Valentine",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${geistMono.variable}`}>
      <body className="bg-bg text-fg antialiased">
        <AnnouncementBar />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
