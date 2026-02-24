import Link from 'next/link';

export default function ContactForm() {
  return (
    <>
      {/* Contact Grid (Form + Info Cards) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm p-3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 50 000 0000"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm p-3"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm p-3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Service Required
                </label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm p-3 appearance-none">
                  <option>Roadside Assistance</option>
                  <option>Flatbed Towing</option>
                  <option>Car Recovery</option>
                  <option>Battery Jumpstart</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your location and issue..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-background-dark py-4 rounded-lg font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Request Assistance{' '}
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            {/* Quick Call Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="tel:+971509210785"
                className="group bg-primary p-6 rounded-2xl flex flex-col justify-between min-h-[160px] transition-transform hover:-translate-y-1"
              >
                <div className="bg-background-dark/10 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-background-dark">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-background-dark/60 tracking-wider">
                    Primary Line
                  </p>
                  <p className="text-xl font-black text-background-dark">+971 50 921 0785</p>
                </div>
              </Link>
              <Link
                href="tel:+971527879800"
                className="group bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between min-h-[160px] transition-transform hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Secondary Line
                  </p>
                  <p className="text-xl font-black text-white">+971 52 787 9800</p>
                </div>
              </Link>
            </div>

            {/* Detail Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-500 dark:text-slate-400">Mussafah M13, Abu Dhabi, UAE</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Support</h4>
                  <p className="text-slate-500 dark:text-slate-400">rukhsarrecovery@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                <div className="bg-primary/20 p-3 rounded-xl text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Operating Hours</h4>
                  <p className="text-slate-500 dark:text-slate-400">24 Hours / 7 Days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
          <div className="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background-dark/40 backdrop-blur-sm">
            <Link
              href="https://maps.google.com/?q=Mussafah+M13+Abu+Dhabi"
              className="bg-primary text-background-dark px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </Link>
          </div>
          <div
            className="w-full h-full bg-cover bg-center grayscale dark:invert-[0.1] contrast-[1.1]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEDe_gGIEp-2rYRI58apGNn7SoqPAqLNBKh1eQmw4QkmqclhCrzDC2PjkgGZgE9gW51bwl1t6yKSFPdYdAtXO5H8VrOZYfPdCp5V4NsaV6Xw0Iebsx7SAF3VOPOb7SPGVCPwVWS262sw9B-L8pM4keSaXF-T-GUaX67Dk5plhhFsh-c_pPPAKzCFRMeFP42x174XSpte85DykVm4-CCZKUS4R0bQ7LtqXrR6Q7TgcZAXfENyt-cbB8E_ezNzB28-tjRIGkIUBFk0g')",
            }}
          ></div>
          {/* Location Overlay Card */}
          <div className="absolute bottom-6 left-6 z-20 hidden md:block">
            <div className="bg-background-dark p-6 rounded-2xl border border-primary/20 shadow-2xl max-w-xs">
              <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-2">
                Central Hub
              </h4>
              <p className="text-white font-bold leading-tight mb-4">
                Mussafah Industrial Area M13, Abu Dhabi
              </p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-tighter">
                <span className="material-symbols-outlined text-xs text-primary">verified</span>
                Strategically located for rapid response
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}