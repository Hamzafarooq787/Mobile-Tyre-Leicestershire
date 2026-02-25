const dubaiAreas = [
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
];

export default function CoverageGrid() {
  return (
    <section className="bg-gradient-to-b from-darkBg to-darkCard py-20 px-4 border-y border-amber-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Areas We <span className="text-amber-500">Cover</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          From the shores of Jumeirah to the heart of Deira — our mobile team serves every corner of Dubai.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {dubaiAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 p-3 bg-black/30 backdrop-blur-sm rounded-xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5"
            >
              <svg
                className="w-5 h-5 text-amber-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm text-gray-300 font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}