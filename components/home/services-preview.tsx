export default function ServicesPreview() {
  return (
    <section className="py-20 bg-card" data-purpose="features-grid" id="services">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Premium Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-background p-8 rounded-custom border border-border hover:border-primary transition-colors group">
            {/* Added image */}
            <img
              src="/services/s7.jpeg"
              alt="24/7 Emergency Service"
              className="w-full h-40 object-cover rounded-t-custom mb-4"
            />
            <div className="text-primary mb-6 transition-transform group-hover:scale-110">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">24/7 Emergency Service</h3>
            <p className="text-muted-foreground">
              Locked out or flat tyre in the middle of the night? We're available 24/7 to get you back on the
              road.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-background p-8 rounded-custom border border-border hover:border-primary transition-colors group">
            {/* Added image */}
            <img
              src="/services/s8.jpg"
              alt="Competitive Prices"
              className="w-full h-40 object-cover rounded-t-custom mb-4"
            />
            <div className="text-primary mb-6 transition-transform group-hover:scale-110">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Competitive Prices</h3>
            <p className="text-muted-foreground">
              High-quality service doesn't have to break the bank. We offer transparent pricing with no hidden
              fees.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-background p-8 rounded-custom border border-border hover:border-primary transition-colors group">
            {/* Added image */}
            <img
              src="/services/s9.avif"
              alt="All Major Brands"
              className="w-full h-40 object-cover rounded-t-custom mb-4"
            />
            <div className="text-primary mb-6 transition-transform group-hover:scale-110">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">All Major Brands</h3>
            <p className="text-muted-foreground">
              We stock a wide range of premium, mid-range, and budget tyres for cars, SUVs, and vans.
            </p>
          </div>
          {/* Benefit 4 */}
          <div className="bg-background p-8 rounded-custom border border-border hover:border-primary transition-colors group">
            {/* Added image */}
            <img
              src="/services/s10.webp"
              alt="Fully Equipped Van"
              className="w-full h-40 object-cover rounded-t-custom mb-4"
            />
            <div className="text-primary mb-6 transition-transform group-hover:scale-110">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Fully Equipped Van</h3>
            <p className="text-muted-foreground">
              Our mobile workshops have the latest digital balancing and fitting technology on board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}