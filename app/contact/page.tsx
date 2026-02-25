import ContactHero from '@/components/contact/contact-hero';
import ContactForm from '@/components/contact/contact-form';
import Footer from '@/components/home/footer';
import Header from '@/components/home/header';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBg text-white font-sans">
      {/* Header (exactly as in HTML) */}
      <Header />

      <main className="flex-grow">
        <ContactHero />
        <ContactForm />
      </main>

      {/* Emergency Bar (sticky bottom) */}
      <div className="bg-primary py-4 px-4 text-center sticky bottom-0 z-40" data-purpose="emergency-bar">
        <a className="inline-flex items-center text-white font-bold space-x-2 group" href="tel:07599298404">
          <span className="text-lg">Prefer to talk now?</span>
          <span className="text-xl underline underline-offset-4 group-hover:no-underline transition-all">
            Call 07599 298404
          </span>
          <svg
            className="w-6 h-6 ml-2 animate-bounce-x"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </a>
      </div>

      {/* Footer (exactly as in HTML) */}

      <Footer />
      {/* Animation styles (from original HTML) */}
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>

    </div>
  );
}