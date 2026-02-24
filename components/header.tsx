import Link from 'next/link';

export function Header() {
  return (
    <>
      {/* Emergency Top Bar */}
      <div className="bg-primary text-background-dark py-2 px-4 md:px-10 flex flex-wrap justify-between items-center gap-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-xl">call</span>
            <a className="font-bold text-sm md:text-base" href="tel:+971509210785">
              +971 50 921 0785
            </a>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap border-l border-background-dark/20 pl-6">
            <span className="material-symbols-outlined text-xl">phone_iphone</span>
            <a className="font-bold text-sm md:text-base" href="tel:+971527879800">
              +971 52 787 9800
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">mail</span>
          <a className="font-medium text-sm" href="mailto:rukhsarrecovery@gmail.com">
            rukhsarrecovery@gmail.com
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-white/10 bg-background-dark/95 backdrop-blur-md px-4 md:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <span className="material-symbols-outlined text-background-dark text-3xl font-bold">
                  local_shipping
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-lg md:text-xl font-black leading-none tracking-tight">
                  ABU DHABI MUSAFFAH
                </h1>
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  Car Recovery Services
                </span>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-slate-300 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors font-medium">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>
    </>
  );
}