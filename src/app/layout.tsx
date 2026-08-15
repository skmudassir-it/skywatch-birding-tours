import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skywatch-birding-tours.amsitservices.com"),
  title: {
    default: "SkyWatch Birding Tours — Expert-Led Bird Watching Tours & Workshops",
    template: "%s | SkyWatch Birding Tours",
  },
  description:
    "SkyWatch Birding Tours leads expert bird watching walks, dawn chorus tours, migration trips, photography outings, workshops and multi-day excursions. Small groups, master guides, unforgettable sightings.",
  keywords: [
    "bird watching tours",
    "birding tours",
    "dawn chorus tour",
    "migratory bird tours",
    "bird photography tours",
    "birding workshops",
    "guided bird walks",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SkyWatch Birding Tours",
    title: "SkyWatch Birding Tours — Expert-Led Bird Watching Tours & Workshops",
    description:
      "Guided bird walks, dawn chorus tours, migration trips, photography outings and workshops. Small groups, master guides.",
    url: "https://skywatch-birding-tours.amsitservices.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkyWatch Birding Tours — misty wetlands at dawn with birds in flight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyWatch Birding Tours — Expert-Led Bird Watching Tours & Workshops",
    description:
      "Guided bird walks, dawn chorus tours, migration trips and photography outings.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
