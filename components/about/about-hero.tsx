export default function AboutHero() {
  return (
    <section
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      data-purpose="hero"
    >
      {/* Hero Background Image */}
      <img
        alt="Tyre technician team working at night"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeg-fyD3o7ntvhqkPmILpWD03J4P4l9cvVP_oPuC4SceykqNYg6OD4uwWdwssTLzepXqbYgRCtbvhhHxCtvZxzYj1a8nzQ5r9W3RJsgtN0T9wHC4Cfj6B4RrQY5oe08rX5OwSD1I8zG5cJufRSuRULTloxB22YMcLdPpQUiA3KWyEekEnVIIF29OonFY2RR2vQYXQT28zvQ_R28HVIjjkDQ-C37HKE_iSEYpu--R3R_v00EUtedWLf2FeHrLWfCQO3Ht1SaC3UoOk"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/40 to-[#121212]/90"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="inline-block py-1 px-3 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Dedicated Local Team
        </span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white uppercase tracking-tighter">
          About Mobile Tyre <br />
          <span className="text-primary">Leicestershire</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          The county's premier 24/7 mobile tyre fitting service, delivering peace of mind and technical
          excellence to your doorstep.
        </p>
      </div>
    </section>
  );
}