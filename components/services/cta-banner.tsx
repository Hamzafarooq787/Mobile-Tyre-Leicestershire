import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="px-4 py-20 bg-primary">
      <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-background-dark text-4xl md:text-5xl font-black uppercase italic leading-none">
          Need Assistance Right Now?
        </h2>
        <p className="text-background-dark/80 text-lg font-medium max-w-md">
          Our operators are standing by. We can reach any location in Abu Dhabi within 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link
            href="tel:+971501234567"
            className="flex items-center justify-center gap-3 bg-background-dark text-primary px-10 py-5 rounded-xl text-2xl font-black hover:scale-105 transition-transform shadow-2xl"
          >
            <span className="material-symbols-outlined text-3xl">phone_enabled</span>
            +971 50 123 4567
          </Link>
          <Link
            href="https://wa.me/971501234567"
            className="flex items-center justify-center gap-3 bg-white text-background-dark px-10 py-5 rounded-xl text-2xl font-black hover:scale-105 transition-transform shadow-xl"
          >
            <span className="material-symbols-outlined text-3xl">chat</span>
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}