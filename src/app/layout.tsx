import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollReset from "@/components/ScrollReset";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waleed Ishaq | Senior Laravel Backend Developer",
  description:
    "Full Stack Developer with 5+ years of experience building scalable Laravel APIs, ERP systems, real-time WebSockets, and production-ready backend architecture in Saudi Arabia.",
  keywords: [
    "Waleed Ishaq",
    "Laravel Developer",
    "Full Stack Developer",
    "Backend Developer",
    "PHP Developer",
    "Saudi Arabia",
    "RESTful API",
    "WebSockets",
  ],
  authors: [{ name: "Waleed Ishaq" }],
  openGraph: {
    title: "Waleed Ishaq | Senior Laravel Backend Developer",
    description:
      "Full Stack Developer with 5+ years of experience building scalable backend systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
