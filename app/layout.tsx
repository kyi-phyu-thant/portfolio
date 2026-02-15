import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyi Phyu Thant | UI/UX Designer & Project Manager",
  description:
    "Kyi Phyu Thant is a UI/UX Designer and Project Manager with a Computer Science background. Experienced in Figma, Shopify, web design, and user-centered digital products.",
};

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hostGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
