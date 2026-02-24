export default function CoverageGrid() {
  const areas = [
    'Abu Dhabi',
    'Musaffah',
    'Mafraq',
    'Baniyas',
    'Yas Island',
    'Al Reem Island',
    'Al Shamkha',
    'Al Falah',
    'Al Shahama',
    'Ruwais',
    'Al Mirfa',
    'Dubai',
    'Ajman',
    'Sharjah',
    'Al Fujairah',
  ];

  return (
    <section className="px-4 md:px-20 lg:px-40 py-20 bg-background-dark border-y border-primary/10">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <h3 className="text-white text-3xl font-black mb-4 uppercase tracking-tighter">
          Service Coverage Areas
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We provide the fastest response times across Abu Dhabi and all Northern Emirates.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {areas.map((area) => (
          <div
            key={area}
            className="glass-card p-4 rounded-lg flex items-center gap-3 hover:border-primary/50 transition-colors cursor-default"
          >
            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
            <span className="text-slate-200 font-medium">{area}</span>
          </div>
        ))}
      </div>
    </section>
  );
}