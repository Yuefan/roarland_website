'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: '产品案例', href: '#cases' },
  { label: '核心技术', href: '#tech' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? 'shadow-md border-b border-black/8'
          : 'border-b border-black/6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[80px]">

        {/* Logo */}
        <a href="#" className="flex items-center gap-4">
          <Image
            src="/logos/ROARLAND-Logo5-transparent.png"
            alt="ROARLAND"
            width={360}
            height={83}
            className="h-14 w-auto"
            priority
            unoptimized
          />
          {/* <span
            className="text-[#0A0A0A] leading-none"
            style={{
              fontFamily: '"PingFang SC","Microsoft YaHei","Hiragino Sans GB",sans-serif',
              fontSize: '1.45rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            若尔岚德
          </span> */}
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[#444] text-lg tracking-wide hover:text-[#0A0A0A] transition-colors no-underline font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-brand-red text-white px-6 py-2.5 text-sm font-bold tracking-wider hover:bg-brand-dark transition-colors no-underline"
        >
          了解更多 →
        </a>
      </div>
    </nav>
  )
}
