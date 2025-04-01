import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans } from "next/font/google";
import "./globals.css";

const primary = Noto_Sans({
  weight: ["400", "500", "600"],
  variable: "--font-primary",
  subsets: ["latin"],
});

const secondary = Noto_Serif({
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluet",
  description: "Bluet is currently in development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${secondary.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
