export function CTABanner() {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-background-dark text-center">
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase">
            Need Urgent Assistance?
          </h2>
          <p className="text-background-dark/80 text-lg md:text-xl font-medium max-w-2xl">
            Don't stay stranded. Call us now and we'll dispatch our nearest recovery truck to your location immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              className="bg-background-dark text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl"
              href="tel:+971509210785"
            >
              <span className="material-symbols-outlined text-primary">call</span>
              +971 50 921 0785
            </a>
            <a
              className="bg-white text-background-dark px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl"
              href="tel:+971527879800"
            >
              <span className="material-symbols-outlined text-primary">phone_iphone</span>
              +971 52 787 9800
            </a>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 opacity-10 rotate-12 scale-150">
          <span className="material-symbols-outlined text-[300px]">local_shipping</span>
        </div>
      </div>
    </section>
  );
}