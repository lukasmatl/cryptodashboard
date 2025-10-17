import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Inter, Manrope, IBM_Plex_Sans } from "next/font/google";
import { GeistSans, GeistMono } from "geist/font";
import { Theme, ThemePanel } from "@radix-ui/themes";
import clsx from "clsx";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-ibm-plex" });
const geist = GeistSans({ variable: "--font-geist" });
const geistMono = GeistMono({ variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "CryptoVista | Portfolio Intelligence",
  description:
    "Interactive crypto portfolio dashboard built with Next.js, Tailwind CSS, Shadcn/UI, Radix Themes, and Motion animations.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-slate-950 text-slate-100",
          inter.variable,
          manrope.variable,
          ibmPlexSans.variable,
          geist.variable,
          geistMono.variable
        )}
      >
        <Theme accentColor="blue" grayColor="slate" radius="large" scaling="95%">
          {children}
          {process.env.NODE_ENV === "development" ? <ThemePanel /> : null}
        </Theme>
      </body>
    </html>
  );
}
