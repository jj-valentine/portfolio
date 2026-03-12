import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Lora } from "next/font/google";
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

const lora = Lora({
  variable: "--font-prose",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://james-valentine.com";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James Valentine",
  url: SITE_URL,
  email: "j@mesvalentine.com",
  image: `${SITE_URL}/headshot.jpg`,
  jobTitle: "Full-Stack Engineer",
  description:
    "Software engineer with a background in physics and mathematics. 12+ years building full-stack web applications. Founder of REAL K-9, a professional dog training business in Seattle.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Washington",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "B.S. Physics",
    description: "Departmental Honors · Dean's List · 2016",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Full-Stack Engineer",
      occupationLocation: { "@type": "City", name: "Seattle" },
      skills: "TypeScript, React, Next.js, Node.js, AI agents",
    },
    {
      "@type": "Occupation",
      name: "Dog Trainer",
      occupationLocation: { "@type": "City", name: "Seattle" },
    },
  ],
  owns: {
    "@type": "LocalBusiness",
    name: "REAL K-9",
    url: "https://real-k9.com",
    description:
      "Seattle-based professional dog training. Service-level obedience, behavior modification, and handler education. 250+ dogs trained.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "22",
    },
  },
  knowsAbout: [
    "AI agents",
    "Agentic AI systems",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full-Stack Engineering",
    "Physics",
    "Mathematics",
    "K-9 Training",
    "Canine Psychology",
    "Handler Mechanics",
  ],
  knowsLanguage: "en",
  sameAs: [
    "https://github.com/jj-valentine",
    "https://www.linkedin.com/in/jamesjovalentine/",
    "https://real-k9.com",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "James Valentine",
  url: SITE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "James Valentine",
    template: "%s | James Valentine",
  },
  description:
    "Software engineer, educator, and dog trainer. Building things at the intersection of software, science, and applied learning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "James Valentine",
    description:
      "Software engineer, educator, and dog trainer. Building things at the intersection of software, science, and applied learning.",
    url: SITE_URL,
    siteName: "James Valentine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Valentine",
    description:
      "Software engineer, educator, and dog trainer. Building things at the intersection of software, science, and applied learning.",
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
    <html lang="en" className={`${dmSans.variable} ${geistMono.variable} ${lora.variable}`}>
      <body className="bg-bg text-fg antialiased">
        {/* JSON-LD structured data — static server-rendered consts, no XSS risk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <AnnouncementBar />
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
