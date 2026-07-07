import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prateek Sharma | Full-Stack Developer & AI Engineer",
  description: "Portfolio of Prateek Sharma, specializing in React, Next.js, Django, FastAPI, AI Agents, and scalable cloud architectures.",
  keywords: ["Prateek Sharma", "Portfolio", "Full Stack Developer", "Software Engineer", "AI Agents", "Next.js", "React", "TypeScript", "FastAPI"],
  authors: [{ name: "Prateek Sharma" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
