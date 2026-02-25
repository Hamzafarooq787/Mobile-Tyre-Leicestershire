export default function CTABanner() {
  return (
    <section className="py-24 bg-black/60 text-center" data-purpose="call-to-action">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6">Need a tyre? Don't wait around.</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Get back on the road in no time with Leicestershire's most trusted mobile tyre fitting team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-custom transition-all shadow-lg shadow-primary/20" href="tel:07599298404">
            Call Now: 07599 298404
          </a>
          <a className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-custom transition-all shadow-lg shadow-orange-500/20" href="#contact">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}