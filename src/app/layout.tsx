import type { Metadata } from "next";
import { Outfit, Vazirmatn } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Ahmed Gaeedy - Portfolio",
  description: "Portfolio Website for Ahmed Gaeedy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${outfit.variable} ${vazirmatn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
