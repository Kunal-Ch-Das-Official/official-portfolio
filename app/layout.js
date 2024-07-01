import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/reusable/header/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kunal Chandra Das",
  description: "Kunal Chandra Das, mern-stack-developer, system-designer, ux-ui-designer, Senior Backoffice Executive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        {children}
        </body>
    </html>
  );
}
