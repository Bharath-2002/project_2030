import type { Metadata } from "next";
import { Inter, Chokokutai, Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const chokokutai = Chokokutai({
  variable: "--font-chokokutai",
  subsets: ["latin"],
  weight: "400",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "2030 | Creative Collective",
  description: "A collective of creators pushing the boundaries of digital expression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${chokokutai.variable} ${comfortaa.variable} font-sans antialiased bg-black text-white`}
      >
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
