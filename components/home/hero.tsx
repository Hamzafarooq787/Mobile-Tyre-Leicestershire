export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden" data-purpose="hero-banner">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern tyre fitting van at night"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUCSKUZDYcC-6b2i_9mqZ8V4FoxAIpJslJghY8b8Beh-IerUVIQYQccQrtmAsFcUBHbbdHZrPtbEfKoJxWQ7CsIi4CYGbunDGOYifnXUQ7_srAgeiBc49nvjYDG6f7XhXk0zatlPu_Ct3a2wV61d9Z2G8rOs47xJLYJHu-Isn7jNnQ1BMMDlpE0hGm0AnHKquVCKBkj-KqunR_n_iiM_Bk96fpT5I7A4XHRG0nlqKv-WWj0aU-PUvPISbgxv17RE5g34S6M6YIg78"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground">
            Mobile Tyre Leicestershire –{" "}
            <span className="text-primary">Fast & Reliable</span> Tyre Fitting at Your Location
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 border-l-4 border-primary pl-6">
            24/7 Emergency Service • Mobile • Professional
          </p>
          <a
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-custom transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            href="tel:07599298404"
          >
            <svg
              className="h-6 w-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Call 07599 298404
          </a>
        </div>
      </div>
    </section>
  );
}