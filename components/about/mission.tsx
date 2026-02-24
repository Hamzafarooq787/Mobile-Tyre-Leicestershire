export default function Mission() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column (text) */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Securing Your Journey Across the UAE
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                At Abu Dhabi Musaffah Recovery, our mission is to provide professional,
                24/7 roadside assistance and recovery services across the UAE. We understand
                that vehicle breakdowns can be stressful, which is why we are committed to
                ensuring the safety and peace of mind of every driver.
              </p>
              <p>
                By offering specialized equipment and an expert team capable of handling all
                vehicle types—from luxury sedans to heavy-duty trucks—we guarantee a solution
                anytime and anywhere. Our fleet is strategically located to ensure we reach
                you within minutes, not hours.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <h4 className="font-bold text-white">Certified Experts</h4>
                  <p className="text-sm text-slate-400">Trained for all scenarios</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <h4 className="font-bold text-white">24/7 Response</h4>
                  <p className="text-sm text-slate-400">Always available</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right column (image) */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/5">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc8-912HeRyJ0ujIwEUl0kRGlLLYpqrl-1JNS8HAlw3xUwZ04cUYyLcCGGDoR0p0cs0BHdKcID0iWjOm7FwjJNNptIIz4zkABOIn_E5OZBs4Q5wOBy3hGXL-WZ-t7-hiz5DmA7ymS0N4IvQGolJTOEOkKK6brQCcWloULs9wNiu-ODC1vy5Mx1DbG0xri9sKH7rK2I-pan6GzV1bA803UPtzP70xZuuxyShkF2cRczBoNRc727V8iklFuQkiyZlXP3DiF5JJuNono"
                alt="Recovery technician assisting a driver with car trouble"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background-dark border border-white/10 p-6 rounded-xl hidden md:block">
              <div className="text-primary text-4xl font-black mb-1">10+</div>
              <div className="text-white text-sm font-bold uppercase tracking-wider">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}