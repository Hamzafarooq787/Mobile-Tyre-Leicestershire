export default function Mission() {
  return (
    <>
      {/* Story Section */}
      <section className="py-24 bg-[#121212]" id="about-story">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div data-purpose="story-text">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Local <span className="text-primary font-black italic">Tyre Experts</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  With over 10 years of experience serving the heart of England, Mobile Tyre Leicestershire was
                  founded on a simple principle: nobody should be left stranded because of a puncture or blow-out.
                </p>
                <p>
                  What started as a single van service has grown into a fleet of state-of-the-art mobile fitting
                  units. Our technicians aren't just mechanics; they are specialists trained in high-pressure
                  situations, ensuring that whether you're at home, at work, or on the hard shoulder of the M1,
                  you're in safe hands.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-white">10+</div>
                    <div className="text-sm uppercase font-bold text-primary">Years Experience</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm uppercase font-bold text-primary">Emergency Support</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="relative" data-purpose="story-image">
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-custom -z-10 translate-x-4 translate-y-4"></div>
              <img
                alt="Technician helping customer at roadside at night"
                className="rounded-custom shadow-2xl w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcj251G9ZzYcX7KqWyioADSO9b9QR8llB9kBrx2TKwn-I67nFTN8-Gmpd60Gwq4P3GZWG05FMU1_nvQ8aZkFwetlfsznv1IyN7ACjnrZyT2yN5TvPpQo33ForeFPUce0dlXac6u6pY18Khp-zZ-y3AaibncpMO8wKjFjQhAPGPbIlpDShMv75Ok4FBhP3gkIrYwu17BecpHrXyrqJgXkpTcUNzSVnVhKGQ631JxX3uSB_IuaxA1sb7gEdI5L0KyEx_WSH2TMV6ss"
              />
              <div className="absolute bottom-6 left-6 bg-[#121212]/80 backdrop-blur-md p-4 rounded-custom border border-white/10">
                <p className="text-white font-bold text-sm">
                  Response Time: <span className="text-primary italic">30-60 Mins</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#1e1e1e]" data-purpose="expertise-grid">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Fully Trained & <span className="text-primary">Insured</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto italic">
              Industry-standard equipment combined with dramatic precision. Our team is qualified for all vehicle
              types.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/5] overflow-hidden rounded-custom relative group">
              <img
                alt="Technician working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/services/s8.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-custom relative group md:translate-y-12">
              <img
                alt="Wheel balancing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvzl_b8cnO8Q8MykcucnAZenjl16rrIzOniarUpRbHY5hB9yCo5RDsPrilX71-9-Zl84_RZhikQX0PX-4WrKcL3VHOXRWYZwYAZPm7iM-tVMGX_Qcye0Ga56Bs0j2qXplqXIgX5OCV-q6i2LZAE7jFz0kly_9I9LkAgJUMKXrwOKLqx1QQDOTOhLEqiyGu3yf3jE3vq_epnyHYNq14-L0oN95qVar2B1eXEzXWfrj1WVJcWVWa6Bowosorp3SO1rIDPH4k5weGwFE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-custom relative group">
              <img
                alt="Tools and lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/services/s4.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#121212]" data-purpose="core-values">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Reliability */}
            <div
              className="bg-[linear-gradient(145deg,#1e1e1e,#252525)] p-10 rounded-custom border border-white/5 hover:border-primary/50 transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Reliability</h3>
              <p className="text-gray-400">
                Rain or shine, day or night. We arrive when we say we will, equipped to get you back on the move.
              </p>
            </div>
            {/* Card 2: Transparency */}
            <div
              className="bg-[linear-gradient(145deg,#1e1e1e,#252525)] p-10 rounded-custom border border-white/5 hover:border-primary/50 transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Transparency</h3>
              <p className="text-gray-400">
                No hidden call-out fees or mystery surcharges. We provide clear, honest pricing before we start any
                work.
              </p>
            </div>
            {/* Card 3: Prompt Service */}
            <div
              className="bg-[linear-gradient(145deg,#1e1e1e,#252525)] p-10 rounded-custom border border-white/5 hover:border-primary/50 transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase">Prompt Service</h3>
              <p className="text-gray-400">
                Our logistics system ensures the nearest technician is dispatched instantly, minimizing your wait
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 bg-[#1e1e1e]" id="service-area">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Stylized Map Placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center" data-purpose="area-map">
              <div className="relative max-w-md w-full aspect-square bg-[#121212]/50 rounded-full flex items-center justify-center border border-primary/20 drop-shadow-[0_0_10px_rgba(0,170,255,0.5)]">
                <svg
                  className="w-4/5 h-4/5 text-primary opacity-80"
                  fill="none"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Abstract Leicestershire Outline */}
                  <path
                    d="M100 20 L130 30 L160 50 L170 90 L160 140 L130 170 L80 180 L40 160 L20 120 L30 60 L60 30 Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  {/* Pulse Points */}
                  <circle cx="100" cy="100" fill="currentColor" r="4">
                    <animate attributeName="r" dur="2s" repeatCount="indefinite" values="3;6;3"></animate>
                  </circle>
                  <circle cx="130" cy="70" fill="currentColor" r="3"></circle>
                  <circle cx="70" cy="140" fill="currentColor" r="3"></circle>
                  <circle cx="60" cy="80" fill="currentColor" r="3"></circle>
                  {/* Electric highlight lines */}
                  <path
                    d="M100 100 L130 70 M100 100 L70 140 M100 100 L60 80"
                    stroke="currentColor"
                    strokeDasharray="4 2"
                    strokeWidth="1"
                  ></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-primary text-[#121212] font-black px-4 py-1 text-xs uppercase rounded-full shadow-lg shadow-primary/40">
                    LEICESTER CENTRAL
                  </span>
                </div>
              </div>
            </div>
            {/* Towns List */}
            <div className="w-full lg:w-1/2" data-purpose="area-towns">
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">
                Covering All of <br />
                <span className="text-primary">Leicestershire</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-gray-400 font-medium">
                {[
                  'Dubai Marina',
                  'Downtown Dubai',
                  'Palm Jumeirah',
                  'Jumeirah',
                  'Deira',
                  'Bur Dubai',
                  'Al Barsha',
                  'Mirdif',
                  'Arabian Ranches',
                  'The Springs',
                  'Dubai Hills Estate',
                  'Jumeirah Lakes Towers',
                  'Al Nahda',
                  'Karama',
                  'Al Qusais',
                  'Al Warqa',
                  'International City',
                  'Silicon Oasis',
                  'Business Bay',
                  'Jumeirah Village Circle',
                  'Al Furjan',
                  'Discovery Gardens',
                  'The Greens',
                  'Emirates Hills',
                ].map((town) => (
                  <div key={town} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {town}
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 border border-primary/20 bg-primary/5 rounded-custom">
                <p className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                  Can't see your town?
                </p>
                <p className="text-gray-400 text-sm italic">
                  If you're in the LE postcode area or on the M1/A46 corridors, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}