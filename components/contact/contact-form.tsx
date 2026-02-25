export default function ContactForm() {
  return (
    <>
      {/* Contact Info + Map Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-purpose="info-columns">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Details */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary mr-4"></span>
                Contact Information
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">Call Our Dispatch</p>
                  <a
                    className="text-4xl md:text-5xl font-black text-primary hover:text-sky-400 transition-colors"
                    href="tel:07599298404"
                  >
                    07599 298404
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">Email Us</p>
                  <a
                    className="text-xl text-slate-200 hover:text-primary transition-colors"
                    href="mailto:info@mobiletyreleicestershire.co.uk"
                  >
                    info@mobiletyreleicestershire.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Availability</p>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-green-900/40 text-green-400 border border-green-800 rounded-full text-sm font-bold animate-pulse">
                      OPEN 24/7
                    </span>
                    <span className="text-slate-300">365 Days a Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Map */}
          <div
            className="rounded-custom overflow-hidden shadow-2xl border border-slate-800 h-[400px]"
            data-purpose="map-container"
          >
            {/* Placeholder for Google Map (Dark Style) */}
            <iframe
              allowFullScreen
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154388.941935408!2d-1.272186831093122!3d52.63660359876251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487742ab49b76c73%3A0x9a151d2a67497a7a!2sLeicester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              width="100%"
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-darkCard py-20 border-y border-slate-800" data-purpose="form-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-slate-400">
              Not an emergency? Drop us a line and we'll get back to you within 24 hours.
            </p>
          </div>
          <form action="#" className="space-y-6" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-purpose="form-group-name">
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full bg-darkBg border border-slate-700 text-white rounded-custom px-4 py-3 form-input-focus transition-all"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div data-purpose="form-group-phone">
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full bg-darkBg border border-slate-700 text-white rounded-custom px-4 py-3 form-input-focus transition-all"
                  id="phone"
                  name="phone"
                  placeholder="07123 456789"
                  type="tel"
                />
              </div>
            </div>
            <div data-purpose="form-group-message">
              <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full bg-darkBg border border-slate-700 text-white rounded-custom px-4 py-3 form-input-focus transition-all"
                id="message"
                name="message"
                placeholder="Tell us how we can help..."
                rows={5}
              />
            </div>
            <button
              className="w-full bg-primary hover:bg-sky-400 text-white font-bold py-4 rounded-custom transition-all btn-hover-effect shadow-lg shadow-primary/20 uppercase tracking-widest text-sm"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Custom styles (from original HTML) */}
      <style>{`
        .form-input-focus:focus {
          outline: none;
          border-color: #00aaff;
          box-shadow: 0 0 0 2px rgba(0, 170, 255, 0.2);
        }
        .btn-hover-effect:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}