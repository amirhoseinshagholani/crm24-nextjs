import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "netXpert",
  description: "netXpert Project",
};

const vazirFont = localFont({
  src:'../public/assets/fonts/Vazir-Regular.woff2'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.className} bg-slate-200`}>{children}</body>
    </html>
  );
}
