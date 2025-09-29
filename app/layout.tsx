import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Noonkopir Bible Baptist Church",
  description: "A family that prays together, stands together",
  icons: {
    icon: "images/logo.png",
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
