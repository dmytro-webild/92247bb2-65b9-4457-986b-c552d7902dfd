import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Old Resto - Timeless Flavors, Elegant Dining',
  description: 'Indulge in classic dishes and an unforgettable dining experience at The Old Resto. Serving gourmet cuisine with passion and tradition since 1985.',
  openGraph: {
    "title": "The Old Resto - Timeless Flavors, Elegant Dining",
    "description": "Indulge in classic dishes and an unforgettable dining experience at The Old Resto. Serving gourmet cuisine with passion and tradition since 1985.",
    "url": "https://www.theoldresto.com",
    "siteName": "The Old Resto",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/truffle-pasta-dish-with-fresh-rosemary-garlic-dark-plate_84443-94474.jpg",
        "alt": "Gourmet pasta dish"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Old Resto - Timeless Flavors, Elegant Dining",
    "description": "Indulge in classic dishes and an unforgettable dining experience at The Old Resto. Serving gourmet cuisine with passion and tradition since 1985.",
    "images": [
      "http://img.b2bpic.net/free-photo/truffle-pasta-dish-with-fresh-rosemary-garlic-dark-plate_84443-94474.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
