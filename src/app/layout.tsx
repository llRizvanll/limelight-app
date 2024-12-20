import type { Metadata } from "next";
import "./globals.css";
import { Lato, Playfair_Display } from "next/font/google";

// Load Lato with available weights
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"], // Supported weights only
  subsets: ["latin"],
  display: "swap",
});

// Load Playfair Display with all weights
const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"], // Supported weights for Playfair
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"], // Support both normal and italic
});

export const metadata: Metadata = {
  title: "Qudee",
  description: "Qudee ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.className} ${playfairDisplay.className}`}>
      <body className="bg-[#F8F8FA]" id="__next">
        {children}
      </body>
    </html>
  );
}
