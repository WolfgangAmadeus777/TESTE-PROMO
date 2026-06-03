import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Promoção Oficial — Edição Limitada',
  description: 'Você pode ter sido pré-selecionado! Confira em menos de 30 segundos.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-[#ede8e3]" style={{ fontFamily: inter.style.fontFamily }}>
      <body className="antialiased" style={{ fontFamily: inter.style.fontFamily }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
