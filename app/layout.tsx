import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
})
const _geistMono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Рейти — Единая платформа рейтингов и отзывов о цифровом контенте | Приложения, Игры, Фильмы",
  description:
    "Рейти агрегирует отзывы и рейтинги о приложениях, играх, сайтах и фильмах. Персонализированные рекомендации помогут найти лучший цифровой контент. Экономьте время на выбор.",
  keywords: [
    "рейтинги приложений",
    "отзывы о играх",
    "рекомендации фильмов",
    "агрегатор отзывов",
    "цифровой контент",
    "Рейти",
    "рейтинг сайтов",
  ],
  authors: [{ name: "Рейти" }],
  creator: "Рейти",
  publisher: "Рейти",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Рейти — Единая платформа рейтингов и отзывов о цифровом контенте",
    description:
      "Агрегируем отзывы и рейтинги о приложениях, играх, сайтах и фильмах. Персонализированные умные рекомендации для вашего выбора.",
    url: "https://raytii.app",
    siteName: "Рейти",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Рейти — Единая платформа рейтингов и отзывов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Рейти — Единая платформа рейтингов и отзывов",
    description: "Агрегируем отзывы о приложениях, играх, сайтах и фильмах. Персонализированные рекомендации.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://raytii.app",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3A86FF" },
    { media: "(prefers-color-scheme: dark)", color: "#3A86FF" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Рейти",
              description:
                "Единая платформа с рейтингами, отзывами и умными рекомендациями по всему цифровому контенту — приложения, игры, сайты, фильмы",
              url: "https://raytii.app",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RUB",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1000",
                bestRating: "5",
                worstRating: "1",
              },
              author: {
                "@type": "Organization",
                name: "Рейти",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
