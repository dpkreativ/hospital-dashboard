import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VitalTrack",
  description: "A health tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`flex min-h-screen flex-col ${inter.className}`}>
          <Header />
          <main className="flex-1 p-4">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
