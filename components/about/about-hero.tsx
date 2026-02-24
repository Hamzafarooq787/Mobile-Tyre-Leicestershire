import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3D49vR8q4s-LB5Nu-3bpT49YDNZcouojy-75UGw-3T1ZvTlr0OQHDegjEzhHPmI7soGH4Y2E4J8ZVQ6XLesfWdsM4Dv9xU3NQcmoTzCjHHkRtgIT5akxjTD2hj1SVYm-YcMQrhu20GbbhbaZh-gT7llbv298cHWNw2ZHvXyWdpzaGv8muAsiLRXVJhzLIfwJV6XP1d_vS4LxcvVhQSx5MnMMWSyYA_2ifdoWe5lxujjdk_CZxWq0wJc8q2eL7tO_zye_oUH6k9Tc"
          alt="Professional recovery truck towing vehicle on UAE highway"
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          About Abu Dhabi <span className="text-primary">Musaffah Recovery</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The premier roadside assistance partner in the UAE, providing professional and
          dependable recovery solutions for over a decade.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex bg-primary text-background-dark hover:bg-primary/90 font-bold px-8 py-4 rounded-lg text-lg transition-transform active:scale-95 items-center gap-2 mx-auto"
          >
            <span className="material-symbols-outlined">sos</span>
            Get Emergency Help
          </Link>
        </div>
      </div>
    </section>
  );
}