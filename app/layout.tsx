import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeffery Parle | Frontend Software Engineer",
  description:
    "Cyberpunk-themed portfolio for Jeffery Parle, a Phoenix-based frontend software engineer building React, TypeScript, Shopify, and ecommerce tooling.",
  metadataBase: new URL("https://parledev.vercel.app"),
  openGraph: {
    title: "Jeffery Parle | Frontend Software Engineer",
    description:
      "React, TypeScript, Shopify, performance, and ecommerce tooling portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
