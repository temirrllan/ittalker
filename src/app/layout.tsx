import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'IT-Talker | Курсы программирования в Казахстане',
  description: 'Профессиональные курсы программирования в Казахстане. Обучение веб-разработке, JavaScript, React, Node.js. Старт карьеры в IT с нуля.',
  keywords: 'IT курсы, программирование, обучение, Казахстан, веб-разработка, JavaScript, React',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
