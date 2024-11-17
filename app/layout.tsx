import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/multiple-use/header/FloatingNavbar";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kunal Chandra Das",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
