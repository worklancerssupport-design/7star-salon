import type { Metadata, Viewport } from "next";
import "./globals.css";
import { schemaOpeningHours } from "@/data/timings";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#355C7D",
};

export const metadata: Metadata = {
  title: "7Star Salon | Premium Hair Studio — Chennai",
  description:
    "7Star Salon is Chennai's premier luxury hair studio offering expert haircuts, colour, bridal makeup, keratin treatments and grooming for men and women across 4 branches in Velachery & IIT Madras.",
  keywords: [
    "haircut saloon in velachery",
    "best salon in velachery",
    "hair salon velachery",
    "family saloon in velachery",
    "unisex salon in velachery chennai",
    "men haircut velachery",
    "bridal makeup velachery",
    "hair colouring velachery",
    "keratin treatment velachery",
    "beauty parlour in velachery",
    "hair spa velachery",
    "7star salon velachery",
    "salon near iit madras",
  ],
  openGraph: {
    title: "7Star Salon | Best Haircut Saloon & Family Beauty Studio in Velachery",
    description:
      "Looking for a haircut saloon in Velachery? 7Star Salon offers premium haircuts, styling, bridal makeup, hair smoothening and grooming across Velachery & IIT Madras.",
    type: "website",
    locale: "en_IN",
    siteName: "7Star Salon Velachery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "7Star Salon — Haircut Saloon in Velachery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7Star Salon | Best Haircut Saloon in Velachery Chennai",
    description: "Top-rated family haircut saloon in Velachery offering expert hair styling, colour, and bridal services.",
    images: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://7starsalon.in" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "7Star Salon - Haircut Saloon in Velachery",
              image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
              description: "Best haircut saloon and luxury family beauty studio in Velachery, Chennai. Expert haircuts, colour, keratin, bridal makeup and grooming.",
              url: "https://7starsalon.in",
              logo: "https://7starsalon.in/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No.13, Anna Nagar 3rd Main Rd, Venus Colony Extension",
                addressLocality: "Velachery, Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600042",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.978643",
                longitude: "80.213328",
              },
              telephone: "+919841418413",
              email: "mani7star25@gmail.com",
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Credit Card",
              areaServed: [
                "Velachery",
                "IIT Madras",
                "Taramani",
                "Guindy",
                "Madipakkam",
                "Adyar",
                "Chennai",
              ],
              openingHours: schemaOpeningHours(),
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "520",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
