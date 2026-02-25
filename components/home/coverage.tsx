import { MapPin } from "lucide-react";

export default function CoverageSection() {
  const areas = [
    "Dubai Marina",
    "Downtown Dubai",
    "Palm Jumeirah",
    "Jumeirah",
    "Deira",
    "Bur Dubai",
    "Al Barsha",
    "Mirdif",
    "Arabian Ranches",
    "The Springs",
  ];

  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-300 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-300 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-3">
          <MapPin className="w-8 h-8 text-amber-600" />
          Our Service Areas
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          We proudly serve clients across Dubai and its surrounding communities.
          Wherever you are, our team is ready to assist you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-200/50 hover:border-amber-400 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {area}
              </span>
            </div>
          ))}
        </div>

        {/* Optional call to action */}
        <div className="mt-10 text-center md:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Not sure if we cover your area?{" "}
            <a
              href="/contact"
              className="text-amber-600 hover:text-amber-700 font-semibold underline decoration-amber-300 underline-offset-2"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}