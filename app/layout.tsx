import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Portfolio Ilyan",
  description: "Welcome to my portfolio",
};

const modak = localFont({
  src: [
    {
      path: "./assets/fonts/modak-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-modak",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/cvj1dnk.css" />
      </head>

      <body className="w-screen h-screen overflow-hidden ">
        <div className={`${modak.variable}`}>{children}</div>
      </body>
    </html>
  );
}
