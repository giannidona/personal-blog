import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gianluca Donato - Blog",
  description: "small chapters of my life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
