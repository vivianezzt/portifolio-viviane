import type { Metadata } from "next";
import {Mulish} from "next/font/google";
import "./global.scss";

const mulish = Mulish({
  subsets: ["latin-ext"],
});


export const metadata: Metadata = {
  title: "Viviane Aguiar",
  description: "Viviane Aguiar is a Fullstack Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>
        {children}
      </body>
    </html>
  );
}
