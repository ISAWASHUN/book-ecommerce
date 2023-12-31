import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { SessionProvider } from 'next-auth/react'
import { NextAuthProvider } from './lib/next-auth/provider'

const notoSansJP = Noto_Sans_JP({subsets: ["latin"], weight: ["400"]})

export const metadata: Metadata = {
  title: 'Book commerce',
  description: 'Book Commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <NextAuthProvider>
        <Header/>
        </NextAuthProvider>
        {children}
      </body>
    </html>
  )
}