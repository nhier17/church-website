import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/Footer";


export const metadata: Metadata = {
  metadataBase: new URL("https://noonkopirbbc.org"), 

  title: {
    default: "Noonkopir Bible Baptist Church | Baptist Church in Kenya",
    template: "%s | Noonkopir Bible Baptist Church",
  },

  description:
    "Noonkopir Bible Baptist Church is a Christ-centered Baptist church committed to prayer, biblical teaching, and serving the local community in Kenya. A family that prays together, stands together.",

  keywords: [
    "Noonkopir Bible Baptist Church",
    "Bible Baptist Church Kenya",
    "Baptist church near me",
    "Christian church Kenya",
    "Bible teaching church",
    "church services near me",
  ],

  icons: {
    icon: "/images/log.png",
  },

  openGraph: {
    title: "Noonkopir Bible Baptist Church",
    description:
      "A Christ-centered Baptist church dedicated to prayer, biblical truth, and community fellowship.",
    url: "https://noonkopirbbc.org",
    siteName: "Noonkopir Bible Baptist Church",
    images: [
      {
        url: "/images/log.png",
        width: 1200,
        height: 630,
        alt: "Noonkopir Bible Baptist Church",
      },
    ],
    locale: "en_KE",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className="antialiased"
      >
        <Navbar />
        {children}
        <Toaster position="top-right" richColors />
        <Footer />
      </body>
    </html>
  );
}
