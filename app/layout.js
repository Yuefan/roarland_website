import { Inter, Barlow_Condensed, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: '若尔岚德 ROARLAND | 让 AI 走进家庭',
  description: '若尔岚德（ROARLAND）— AI Home Intelligence · 致力于将先进人工智能技术融入日常家居场景，打造更智慧、更舒适的现代生活方式。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${barlow.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
