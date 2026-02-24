export function Navigation() {
  return (
    <header className="border-b border-white/10 bg-background-dark/95 backdrop-blur-md px-4 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
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
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-slate-300 hover:text-primary transition-colors font-medium" href="#services">
            Services
          </a>
          <a className="text-slate-300 hover:text-primary transition-colors font-medium" href="#areas">
            Service Areas
          </a>
          <a className="text-slate-300 hover:text-primary transition-colors font-medium" href="#about">
            About
          </a>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg font-bold transition-all border border-white/10">
            Contact Us
          </button>
        </nav>

        <button className="md:hidden text-white">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}