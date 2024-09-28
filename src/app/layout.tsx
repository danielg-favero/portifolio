import { Footer, Header } from "@/components";
import { Poppins } from "@next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-font",
});

export const metadata: Metadata = {
  title: "Daniel Gustavo Favero | Portfólio",
  description: "Portifólio de projetos e experiências profissionais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} overflow-x-hidden [&>*:nth-child(odd)]:bg-primary-100 [&>*:nth-child(even)]:bg-primary-95 flex flex-col items-center justify-between min-h-screen bg-primary-100 relative`}
      >
        {children}
        <Footer />
        <Script
          src="https://kit.fontawesome.com/1bf0b701ae.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
