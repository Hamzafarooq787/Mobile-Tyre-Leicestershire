import { Header } from '@/components/header'
import { FloatingButtons } from '@/components/floating-buttons'
import { Footer } from '@/components/footer'

import { CTABanner } from '@/components/home/cta-banner'
import ServicesHero from '@/components/services/services-hero'
import ServicesGrid from '@/components/services/services-grid'
import CoverageGrid from '@/components/services/coverage-grid'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <CoverageGrid />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
