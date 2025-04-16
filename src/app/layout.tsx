import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

// Change title font to Manrope

export const metadata: Metadata  = {
  title: 'it.t Academy SA| Системный Анализ',
  description: 'it.t Academy SA| Системный Анализ',
  keywords: 'IT курсы, программирование, обучение, Казахстан, веб-разработка, JavaScript, React',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <MetaPixel />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased overflow-x-hidden`}>
        <div className="relative w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
