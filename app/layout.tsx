import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "QUOLYTECH — Architectural Furniture & Design Spaces",
  description: "Architected in Belgium, built to last — timeless pieces. Made by QuolyTech.",
  generator: "QuolyTech",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png?v=2", sizes: "32x32", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.png?v=2", sizes: "32x32", media: "(prefers-color-scheme: light)" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180" },
    ],
    shortcut: "/icon.svg?v=2",
  },
  alternates: {
    canonical: "https://quolytech.example/",
  },
  openGraph: {
    siteName: "QUOLYTECH",
    title: "Architectural Furniture & Design Spaces | QUOLYTECH",
    description: "Architected in Belgium, built to last — timeless pieces. Made by QuolyTech.",
    type: "website",
    url: "https://quolytech.example/",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "QUOLYTECH design furniture — timeless pieces, architected in Belgium",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_BE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Furniture & Design Spaces | QUOLYTECH",
    description: "Architected in Belgium, built to last — timeless pieces. Made by QuolyTech.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "QUOLYTECH design furniture — timeless pieces, architected in Belgium",
      },
    ],
    site: "@quolytech",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
