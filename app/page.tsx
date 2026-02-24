import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero'
import { ServicesPreview } from '@/components/home/services-preview'
import { CoverageSection } from '@/components/home/coverage'
import { ProfessionalSection } from '@/components/home/professional'
import { CTABanner } from '@/components/home/cta-banner'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <CoverageSection />
        <ProfessionalSection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
