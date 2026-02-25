import Link from "next/link";
import CoverageSection from "./coverage";
  const dubaiAreas = [
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
    "Dubai Hills Estate",
    "Jumeirah Lake Towers",
  ];

export default function Footer() {
  return (
    <footer
      className="bg-black/40 pt-16 pb-8 border-t border-gray-800"
      data-purpose="site-footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 uppercase tracking-wider">
              Mobile Tyre Leicestershire
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional mobile tyre fitting service covering the whole of
              Leicestershire 24 hours a day, 7 days a week.
            </p>
            <a href="tel:07599298404" className="text-2xl font-bold text-primary">
              07599 298404
            </a>
          </div>

      <div>
      <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
        Service Areas
      </h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-300">
        {dubaiAreas.map((area) => (
          <li key={area} className="hover:text-white transition-colors duration-200">
            {area}
          </li>
        ))}
      </ul>
    </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Emergency Call-Out
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/services">
                  Tyre Selection
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mobile Tyre Leicestershire. All Rights Reserved.</p>

          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  fillRule="evenodd"
                />
              </svg>
              Leicestershire, UK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}