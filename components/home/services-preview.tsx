import Image from 'next/image';
import Link from 'next/link';

export function ServicesPreview() {
  return (
    <section className="py-24 px-4 md:px-10 bg-background-light dark:bg-background-dark" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4">What We Do</h3>
          <h2 className="text-3xl md:text-5xl font-black dark:text-white">Our Professional Services</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
            <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-xl w-fit mb-6 transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl">
                battery_charging_full
              </span>
            </div>
            <div className="relative w-full aspect-video rounded-xl mb-6 overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/services/Battery & Jump Starter.jpg"
                alt="Battery Jump Start Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Battery &amp; Jump Starter</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Dead battery? We provide quick on-site jumpstart services and high-quality battery replacements for all vehicle makes and models.
            </p>
            <Link
              href="/services"
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Request Assistance <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
            <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-xl w-fit mb-6 transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl">
                auto_towing
              </span>
            </div>
            <div className="relative w-full aspect-video rounded-xl mb-6 overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/services/Car Towing Services.jpg"
                alt="Car Towing Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Car Towing Services</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Safe and secure flatbed towing for cars, SUVs, and luxury vehicles. We treat your vehicle with the utmost care across the UAE.
            </p>
            <Link
              href="/services"
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Request Towing <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
            <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-xl w-fit mb-6 transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-4xl">
                build_circle
              </span>
            </div>
            <div className="relative w-full aspect-video rounded-xl mb-6 overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/services/Car Recovery Services.png"
                alt="Car Recovery Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Car Recovery Services</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Specialized recovery for breakdowns, accidents, and off-road pulls. Our experienced team is equipped for any situation.
            </p>
            <Link
              href="/services"
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              Request Recovery <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}