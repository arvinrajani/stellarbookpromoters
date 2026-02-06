import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ModalProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { defaultMetadata } from "@/lib/seo";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-bg text-text antialiased`}>
        <ScrollProgress />
        <div className="ambient-layer" aria-hidden="true">
          <div className="ambient-grain" />
        </div>
        <div className="relative z-10">
          <ModalProvider>
            <Navbar />
            <main className="pt-6">{children}</main>
            <Footer />
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
