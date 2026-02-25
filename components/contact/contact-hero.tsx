export default function ContactHero() {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center overflow-hidden"
      data-purpose="contact-hero"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img
        alt="Phone ringing in van at night"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV4mSrbZ9XmQn9nv6PEk8mL_mGMzcaJBeuULJWFEBHJRD8vSIk4ex68EIGPLSfp9QM9rwXm2erSIF2zqOXVyTMADafx1Uz22sZbPaOQjd96BKgHaZm9eESBa4GzfdQ3a14TCgaMDF31YapXC7V7ixeNQFklhu31M8tNtTdOoIT39JWCe7N9gI7YT-4iWQf0rPrTCuh4Ao5c2Srhwz5vJn5RdWcsNGAzpLta0DUWkZwoPCDZ-NiBa06OK-pnHG8xWfmILT-2HjWHbM"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Providing 24/7 emergency roadside tyre assistance across Leicestershire. We're always here when you
          need us.
        </p>
      </div>
    </section>
  );
}