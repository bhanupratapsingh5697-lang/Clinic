import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { clinicInfo } from "@/lib/data";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.drumeshchaharclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Umesh Chahar MD Physician | General Physician in Jaipur",
    template: "%s | Dr. Umesh Chahar MD Physician",
  },
  description:
    "Dr. Umesh Chahar MD is a trusted general physician in Jaipur offering health checkups, diabetes and blood pressure management, fever treatment, and preventive healthcare. Book your appointment online.",
  keywords: [
    "general physician Jaipur",
    "Dr. Umesh Chahar",
    "MD physician near me",
    "diabetes specialist Jaipur",
    "blood pressure doctor Jaipur",
    "best physician clinic Jaipur",
    "health checkup Jaipur",
  ],
  authors: [{ name: "Dr. Umesh Chahar" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: clinicInfo.clinicName,
    title: "Dr. Umesh Chahar MD Physician | General Physician in Jaipur",
    description:
      "Experienced MD physician offering general consultation, diabetes & BP management, and preventive healthcare. Book an appointment today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: clinicInfo.clinicName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Umesh Chahar MD Physician",
    description:
      "Trusted general physician care in Jaipur — consultations, health checkups, diabetes & BP management.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: clinicInfo.doctorName,
    medicalSpecialty: "General Practice",
    image: `${siteUrl}/doctor-photo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicInfo.address,
    },
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    url: siteUrl,
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
