import { Header } from '@/components/header'
import { FloatingButtons } from '@/components/floating-buttons'
import { Footer } from '@/components/footer'
import ContactHero from '@/components/contact/contact-hero'
import ContactForm from '@/components/contact/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
