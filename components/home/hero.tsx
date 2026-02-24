import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMZbMHyrVpgvG3G5jQ7YASziQlkG36bnt27EG-hjNzEm2KQ7smsSo7yiI55hDPPPdUUSxZC6GdR4KhNHJ4WCbya08xrAwSEcjKu2cRdJY3XFyMHtvGqjG1sEG1CR1Em1dae0y1TEqP09ERCSMwp5Vs7-F9RvEwd9Bq_WjCHpzzbnBEVOCZaLRW6M2VtQzuXHj0OAsIqr1vXbHGtZQbY_FDzsW8JuqsXWyAocqngU_pPWKFT4aNw-yyqs1xr_pRyATzk9NBLo_mxyU"
          alt="Modern yellow recovery truck in city street"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 w-full grid md:grid-cols-2 gap-12">
        {/* Left content */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full w-fit">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-black uppercase tracking-widest">
              Available 24/7 Across UAE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Fast & Reliable <br /> <span className="text-primary">Car Recovery</span> In Abu Dhabi
          </h2>

          <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Professional 24/7 towing, battery, and roadside assistance across Abu Dhabi Musaffah, Dubai, and all Emirates. We reach you in minutes.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-lg font-black text-lg flex items-center gap-3 transition-transform active:scale-95 shadow-xl shadow-primary/20"
              href="tel:+971509210785"
            >
              <span className="material-symbols-outlined">call</span>
              Call Now
            </a>
            <a
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-black text-lg flex items-center gap-3 transition-transform active:scale-95 shadow-xl shadow-emerald-900/20"
              href="https://wa.me/971509210785"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right stats boxes */}
        <div className="hidden md:flex flex-col justify-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">timer</span>
              <h4 className="text-white font-bold text-2xl">20 Mins</h4>
              <p className="text-slate-400 text-sm">Average Response</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">location_on</span>
              <h4 className="text-white font-bold text-2xl">15+ Cities</h4>
              <p className="text-slate-400 text-sm">Covered Daily</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">verified</span>
              <h4 className="text-white font-bold text-2xl">Fully Insured</h4>
              <p className="text-slate-400 text-sm">Safe Transport</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">handshake</span>
              <h4 className="text-white font-bold text-2xl">5000+</h4>
              <p className="text-slate-400 text-sm">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}