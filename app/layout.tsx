import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kumar Utkarsh - Full Stack Developer",
  description:
    "Portfolio of Kumar Utkarsh, Full Stack Developer and Problem Solver passionate about building scalable web applications and impactful software solutions.",
  keywords:
    "Full Stack Developer, React, NestJS, Next.js, Node.js, PostgreSQL, ATS, Portfolio, IIT Bhubaneswar, Competitive Programming",
  authors: [{ name: "Kumar Utkarsh" }],
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
