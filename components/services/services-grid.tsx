const services = [
  {
    title: 'Mobile Tyre Fitting',
    description:
      'Expert fitting delivered straight to your home or workplace. No garage queues. No wasted time. Just comfort and convenience when you need it most.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s1.jpg',      // s1.jpg
  },
  {
    title: 'Puncture Repairs',
    description:
      'Fast, safe and British Standard repairs to get you confidently back on the road. Because every journey matters.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s2.jfif',     // s2.jfif
  },
  {
    title: 'Tyre Pressure Checks',
    description:
      'Correct tyre pressure improves fuel efficiency and safety. We ensure your tyres are road-ready and performance-optimised.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4M17 3l-4 4M9 21l4-4M13 21l-4-4M21 13v4M19 15h4M12 7v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s3.jpg',      // s3.jpg
  },
  {
    title: 'Seasonal Changes',
    description:
      'Switch between summer and winter tyres effortlessly. Stay safe in every season without lifting a finger.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4M12 18v4M4 12H2h2m16 0h2-2M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828M5.636 18.364l2.828-2.828M15.536 8.464l2.828-2.828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    image: '/services/s4.jpg',      // s4.jpg
  },
  {
    title: 'New Tyres',
    description:
      'Premium, mid-range, and budget options available. We help you choose the perfect tyres for your vehicle and driving style.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s5.avif',     // s5.avif
  },
  {
    title: 'Part-Worn Tyres',
    description:
      'Quality-tested and affordable. A smart choice when you need reliability without stretching your budget.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
    image: '/services/s6.jpg',      // s6.jpg
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-darkBg py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-darkCard border border-darkBorder rounded-custom p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-custom mb-5"
            />
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <a
              href="#"
              className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Find out more
              <span aria-hidden="true" className="text-lg">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}