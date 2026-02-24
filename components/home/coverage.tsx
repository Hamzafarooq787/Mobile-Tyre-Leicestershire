import Image from 'next/image';

export function CoverageSection() {
  return (
    <section className="py-24 px-4 md:px-10 bg-slate-100 dark:bg-black/20" id="areas">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4">
              Where We Operate
            </h3>
            <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-8 leading-tight">
              Fast Response in <br /> Abu Dhabi &amp; Beyond
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Strategically based in Mussafah, we provide the widest coverage in the region. Whether you're in the heart of Abu Dhabi or traveling between Emirates, our fleet is never far away.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
              {[
                'Mussafah',
                'Yas Island',
                'Baniyas',
                'Mafraq',
                'Al Reem',
                'Al Shamkha',
                'Ruwais',
                'Dubai',
                'Sharjah',
              ].map((location) => (
                <div key={location} className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  {location}
                </div>
              ))}
            </div>

            <button className="mt-12 bg-white dark:bg-white/10 border border-slate-300 dark:border-white/10 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-white/20 transition-all">
              View All 15+ Areas
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative bg-white dark:bg-background-dark border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPqwFkoM71ikl5NxNQU7qE4sD9Vlm22WJGbKuTQCnkaV3GDeIjgvh-I7nMNBEIEdchkmrely7f5PjK4RsCAa67R3_8Msvd6T-xW01g-t2i9FExp508sbr7CGMXKGlw1DSo8963gHt-kFZuR1LcERmHaIayroGn4DVOdmmJqoFPBlWsV4aGAxXYNf3TBG-TJXT8w_bmhgkcrD_i1N1xeWTpKVg4LSzcgchKBVCVHKMLqB55Xl8DmIt4wZ3JuedznySQQK6CT_Ec3oY"
                alt="Map of Abu Dhabi Location"
                width={600}
                height={600}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background-dark/90 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                  <div>
                    <h4 className="text-white font-bold text-xl">Primary Location</h4>
                    <p className="text-slate-400">Musaffah, Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}