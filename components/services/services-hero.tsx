import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="px-4 md:px-20 lg:px-40 py-12 bg-gradient-to-b from-background-dark to-[#2d2914]">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-6 text-slate-400 text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-medium">Services</span>
        </nav>

        <div className="max-w-2xl">
          <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
            Professional <span className="text-primary italic">Recovery</span> Services
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-lg border-l-4 border-primary pl-6">
            24/7 Premium Roadside Assistance & Vehicle Logistics across Abu Dhabi & the UAE.
            We never leave you stranded.
          </p>
        </div>
      </div>
    </section>
  );
}