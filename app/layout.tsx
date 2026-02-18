import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MouseFollower from "@/components/shared/MouseFollower";
import SiteFooter from "@/components/shared/SiteFooter";
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
  title: "Hailey Portfolio",
  description: "Portfolio website for Hailey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseFollower />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
