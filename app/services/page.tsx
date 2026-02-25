import ServicesHero from '@/components/services/services-hero'
import ServicesGrid from '@/components/services/services-grid'
import CoverageGrid from '@/components/services/coverage-grid'
import Header from '@/components/home/header'
import CTABanner from '@/components/services/cta-banner'
import Footer from '@/components/home/footer'

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
    </div>
  )
}
