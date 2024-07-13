import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/component/NavBar";
import ThemeContext from "@/context/ThemeContext";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prateek Sharma",
  description: "portfolio",
};

export default function RootLayout({ children }) {
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
