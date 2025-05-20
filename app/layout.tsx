import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'HotViking',
  description: 'HotViking',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
