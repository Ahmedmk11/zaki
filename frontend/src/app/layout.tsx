import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {
    MelodramaBold,
    MelodramaSemibold,
    OutfitRegular,
    OutfitMedium,
    OutfitSemibold,
} from './fonts/fonts'

export const metadata: Metadata = {
    title: 'Zaki | Premium Extra Virgin Olive Oil from Egypt',
    description:
        'Zaki produces pure, cold-pressed extra virgin olive oil sourced from Egyptian olives. Rich in flavor, antioxidants, and perfect for cooking, dipping, and dressing.',
    keywords: [
        'Zaki',
        'extra virgin olive oil',
        'cold pressed olive oil',
        'Egyptian olive oil',
        'premium olive oil',
        'organic olive oil',
        'healthy olive oil',
        'olive oil online store',
        'high quality olive oil',
        'natural olive oil',
        'olive oil for cooking',
        'olive oil for salads',
        'best olive oil in Egypt',
        'olive oil benefits',
        'buy olive oil online',
    ],
    authors: [{ name: 'Zaki' }],
    creator: 'Zaki',
    openGraph: {
        title: 'Zaki | Premium Extra Virgin Olive Oil from Egypt',
        description:
            'Shop premium extra virgin olive oil from Egypt. Zaki delivers rich, flavorful oil for healthy living and gourmet meals.',
        // url: '',
        siteName: 'Zaki',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zaki | Premium Extra Virgin Olive Oil from Egypt',
        description:
            'Cold-pressed, nutrient-rich extra virgin olive oil made from the finest Egyptian olives. Order online from Zaki.',
    },
    other: {
        'apple-mobile-web-app-title': 'Zaki',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased
                ${MelodramaBold.variable} 
                ${MelodramaSemibold.variable} 
                ${OutfitRegular.variable} 
                ${OutfitMedium.variable} 
                ${OutfitSemibold.variable}
                `}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
