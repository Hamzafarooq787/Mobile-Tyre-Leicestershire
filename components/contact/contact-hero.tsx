import Link from 'next/link';

export default function ContactHero() {
  return (
    <section className="relative pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest">
            Available 24/7 in Abu Dhabi
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Contact Us</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Stuck on the road? Need vehicle transport? Our team is ready to assist you anywhere in
          Abu Dhabi within minutes.
        </p>
      </div>
    </section>
  );
}