export function Footer() {
  return (
    <footer className="bg-background-dark text-slate-300 pt-24 pb-12 px-4 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-background-dark text-2xl font-bold">
                local_shipping
              </span>
            </div>
            <h2 className="text-white text-lg font-black leading-none tracking-tight">
              ABU DHABI MUSAFFAH
            </h2>
          </div>
          <p className="leading-relaxed text-sm">
            Professional vehicle recovery and roadside assistance experts serving Abu Dhabi and all UAE Emirates for over 10 years. Reliability you can trust 24/7.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">link</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#services">
                Our Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#areas">
                Service Areas
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Emergency Towing
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Battery Jumpstart
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Accident Recovery
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Flatbed Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Off-Road Pulls
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Mussafah M13, Abu Dhabi, UAE</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <div className="flex flex-col gap-1">
                <a className="hover:text-primary" href="tel:+971509210785">
                  +971 50 921 0785
                </a>
                <a className="hover:text-primary" href="tel:+971527879800">
                  +971 52 787 9800
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">mail</span>
              <a className="hover:text-primary" href="mailto:rukhsarrecovery@gmail.com">
                rukhsarrecovery@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500">© 2024 Abu Dhabi Musaffah Recovery. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            System Online
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
            Live Dispatching
          </span>
        </div>
      </div>
    </footer>
  );
}