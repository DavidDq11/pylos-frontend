import type { Metadata } from 'next'
import { AppProvider } from './context/AppContext'

import './globals.css'
import 'animate.css'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Suspense } from 'react'
import LoadingOverlay from './loading'
import { NavigationEvents } from '../components/navigation-events'
import type { Viewport } from 'next'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
}

export const metadata: Metadata = {
    title: 'Pylos - Aprender nunca fue tan divertido',
    // description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="es"
            suppressHydrationWarning>
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <AppProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                        <Suspense fallback={<LoadingOverlay className="bg-pylos-800" />}>
                            {children}
                            <NavigationEvents />
                        </Suspense>
                        <Toaster />
                    </ThemeProvider>
                </AppProvider>
            </body>
        </html>
    )
}
