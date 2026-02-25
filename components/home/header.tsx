import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
      data-purpose="site-navigation"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <span className="cursor-pointer text-foreground text-xl md:text-2xl font-extrabold tracking-tight">
              Mobile Tyre <span className="text-primary">Leicestershire</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <Link className="hover:text-primary transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-primary transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-primary transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-primary transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Contact Action */}
        <div className="flex items-center space-x-2">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>

          <a
            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            href="tel:07599298404"
          >
            07599 298404
          </a>
        </div>
      </div>
    </header>
  );
}