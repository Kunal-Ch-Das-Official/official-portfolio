import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/re-use/header/PageHeader";
import dynamic from "next/dynamic";
import { ThemeContextProvider } from "@/utils/theme-context/ThemeContext";
const PageFooter = dynamic(
  () => import("@/components/re-use/footer/PageFooter"),
  {
    loading: () => <p>Loading ...</p>,
  }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kunalchandradas.tech"),
  keywords:
    "Web-Developer, Magicmind Technology MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,",
  title: "Kunal Chandra Das",

  openGraph: {
    description:
      "Kunal Chandra Das, Expert Web Developer, Senior Developer, Magicmind Technology Kolkata, Backoffice employee, Linkdin, Facebook, Instagram Twitter, Github",
    images: ["/favicon_io/favicon.ico?v=4"],
  },

  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        <ThemeContextProvider>{children}</ThemeContextProvider>
        <PageFooter/>
        {/* <TestFooter /> */}
      </body>
    </html>
  );
}
