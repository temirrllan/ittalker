import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
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
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
      </body>
    </html>
  );
}
