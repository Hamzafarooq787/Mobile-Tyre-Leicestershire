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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMZbMHyrVpgvG3G5jQ7YASziQlkG36bnt27EG-hjNzEm2KQ7smsSo7yiI55hDPPPdUUSxZC6GdR4KhNHJ4WCbya08xrAwSEcjKu2cRdJY3XFyMHtvGqjG1sEG1CR1Em1dae0y1TEqP09ERCSMwp5Vs7-F9RvEwd9Bq_WjCHpzzbnBEVOCZaLRW6M2VtQzuXHj0OAsIqr1vXbHGtZQbY_FDzsW8JuqsXWyAocqngU_pPWKFT4aNw-yyqs1xr_pRyATzk9NBLo_mxyU"
                alt="Battery Jump Start Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Battery &amp; Jump Starter</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Dead battery? We provide quick on-site jumpstart services and high-quality battery replacements for all vehicle makes and models.
            </p>
            <a
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              href="tel:+971509210785"
            >
              Request Assistance <span className="material-symbols-outlined">arrow_forward</span>
            </a>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPqwFkoM71ikl5NxNQU7qE4sD9Vlm22WJGbKuTQCnkaV3GDeIjgvh-I7nMNBEIEdchkmrely7f5PjK4RsCAa67R3_8Msvd6T-xW01g-t2i9FExp508sbr7CGMXKGlw1DSo8963gHt-kFZuR1LcERmHaIayroGn4DVOdmmJqoFPBlWsV4aGAxXYNf3TBG-TJXT8w_bmhgkcrD_i1N1xeWTpKVg4LSzcgchKBVCVHKMLqB55Xl8DmIt4wZ3JuedznySQQK6CT_Ec3oY"
                alt="Car Towing Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Car Towing Services</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Safe and secure flatbed towing for cars, SUVs, and luxury vehicles. We treat your vehicle with the utmost care across the UAE.
            </p>
            <a
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              href="tel:+971509210785"
            >
              Request Towing <span className="material-symbols-outlined">arrow_forward</span>
            </a>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDER0A8_Lcz0L95-fOyb2jYe21WihbXyH9G_JHpB7EZb9-83b4RJo81dnPQI97rNZWHMiAsqF-SU--gw0KZEPUxpZAJQ8Ubs7bQbTHJMWbsD4r5JcZTPKhqdtvI4otA32fMzUTHOYUQUyxUm9ybi6yGCmsYlRxZlF9B4ImAqgQkgtXt8n8R40zEsvTyzC3FASUv8Se-zcyufWTPoy549q887ob4oU_9LCnlk6jctsC27cYfSffyQwXWKZ8LIul49k-OvLjhRD38S74"
                alt="Car Recovery Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Car Recovery Services</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Specialized recovery for breakdowns, accidents, and off-road pulls. Our experienced team is equipped for any situation.
            </p>
            <a
              className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
              href="tel:+971509210785"
            >
              Request Recovery <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}