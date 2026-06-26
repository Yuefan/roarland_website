import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Cases from '@/components/Cases'
import TechSection from '@/components/TechSection'
import Partners from '@/components/Partners'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Cases />
      <TechSection />
      <Partners />
      <NewsSection />
      <Footer />
    </main>
  )
}
