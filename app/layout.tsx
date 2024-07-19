import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import PageHeader from "@/components/re-use/header/PageHeader";
// import PageFooter from "@/components/re-use/footer/PageFooter";
import dynamic from "next/dynamic";
const PageFooter = dynamic(() => import("@/components/re-use/footer/PageFooter"),
{
  loading: () => <p>Loading ...</p>
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Chandra Das",
  description: "Kunal Chandra Das Official Portfolio",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, ",
  icons: {
    icon: ['/favicon_io/favicon.ico?v=4'],
    apple: ['/favicon_io/apple-touch-icon.png?v=4'],
    // shortcut: ['apple-touch-icon.png']
  }
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        {children}
        <PageFooter />
        </body>
    </html>
  );
}
