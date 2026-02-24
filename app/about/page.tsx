import AboutHero from '@/components/about/about-hero';
import Mission from '@/components/about/mission';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Link from 'next/link';
// import Header and other layout components as needed

export default function AboutPage() {
  return (
    <>
    <Header/>
      <main>
        <AboutHero />
        <Mission />
        {/* Values section (can be its own component) */}
        <section className="py-20 bg-slate-900/50">
          <section className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  Core Values
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">What We Stand For</h2>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                  Our commitment to these values has made us the most trusted recovery name in Musaffah and across the Emirates.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Value cards */}
                <div className="p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Professionalism</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Our team consists of expertly trained technicians who handle every vehicle with the utmost care and respect. We maintain high standards in both our service and our fleet maintenance.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">handshake</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
                  <p className="text-slate-400 leading-relaxed">
                    When you call us, you can count on us. We offer guaranteed 24/7 availability, rain or shine. Our reputation is built on being there for our customers when they need us most.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Speed</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Response time is critical in roadside emergencies. We leverage real-time tracking and strategic dispatching to provide rapid response times across all UAE emirates.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-background-dark">
              <h2 className="text-2xl md:text-3xl font-black italic uppercase">Need Assistance? We're on the way!</h2>
              <p className="font-medium">Call us 24/7 for emergency roadside recovery anywhere in Abu Dhabi.</p>
            </div>
            <Link
              href="tel:+971501234567"
              className="bg-background-dark text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">call</span>
              +971 50 123 4567
            </Link>
          </div>
        </section>        <section className="py-12 bg-primary">
          {/* ... CTA JSX from above ... */}
        </section>
      </main>
      <Footer/>
       </>
  );
}