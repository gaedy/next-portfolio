import type { Metadata } from "next";
import { Outfit, Vazirmatn, Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Gaeedy",
  description: "Welcome to my personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${outfit.variable} ${vazirmatn.variable} ${merriweather.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
