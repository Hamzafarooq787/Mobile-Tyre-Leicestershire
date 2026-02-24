import Link from 'next/link';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  buttonText: string;
  reversed: boolean; // true = image on left, false = image on right
}

export default function ServicesGrid() {
  const services: Service[] = [
    {
      id: 'emergency-towing',
      icon: 'emergency',
      title: 'Emergency Towing',
      description: 'Immediate towing for breakdowns, accidents, or unsafe situations. Available 24/7 across all UAE emirates.',
      features: ['24/7 Availability', 'Accident Recovery', 'Breakdown Towing', 'Flatbed Service'],
      image: '/services/s1.jpeg',
      alt: 'Tow truck providing emergency vehicle recovery on Abu Dhabi highway',
      buttonText: 'Request Emergency Towing',
      reversed: false,
    },
    {
      id: 'breakdown-recovery',
      icon: 'build',
      title: 'Breakdown Recovery',
      description: 'Fast response for mechanical failures. We will get you and your vehicle to safety with our expert technicians.',
      features: ['Engine Failure', 'Transmission Issues', 'Electrical Faults', 'Safe Transport'],
      image: '/services/s2.jfif',
      alt: 'Professional mechanic assisting with vehicle breakdown on UAE roadside',
      buttonText: 'Get Breakdown Help',
      reversed: true,
    },
    {
      id: 'accident-recovery',
      icon: 'warning',
      title: 'Accident Recovery',
      description: 'Professional collision recovery with careful handling of damaged vehicles. We manage post-accident logistics with care.',
      features: ['Collision Recovery', 'Insurance Support', 'Careful Handling', '24/7 Response'],
      image: '/services/s3.webp',
      alt: 'Vehicle being recovered after accident by professional tow truck',
      buttonText: 'Accident Assistance',
      reversed: false,
    },
    {
      id: 'roadside-assistance',
      icon: 'support_agent',
      title: 'Roadside Assistance',
      description: 'On-site help for flat tyres, dead batteries, lockouts, and minor repairs. We come to you wherever you are.',
      features: ['Flat Tyre Change', 'Battery Jump Start', 'Lockout Service', 'Minor Repairs'],
      image: '/services/s4.jpg',
      alt: 'Stranded driver calling for roadside assistance in UAE',
      buttonText: 'Get Roadside Help',
      reversed: true,
    },
    {
      id: 'vehicle-transportation',
      icon: 'local_shipping',
      title: 'Vehicle Transportation',
      description: 'Safe, long-distance transport for non-drivable vehicles across Dubai and all Emirates. Professional handling guaranteed.',
      features: ['Long Distance', 'Multi-Vehicle', 'Secure Strapping', 'Insurance Covered'],
      image: '/services/s5.jpg',
      alt: 'Car transporter vehicle carrying cars for delivery across UAE',
      buttonText: 'Arrange Transport',
      reversed: false,
    },
    {
      id: 'jump-start',
      icon: 'bolt',
      title: 'Jump Start Service',
      description: 'Quick battery jump start to get you back on the road in minutes. We use professional-grade equipment for all vehicle types.',
      features: ['15 Min Response', 'All Vehicles', 'Battery Testing', 'Professional Gear'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByL3mC5rfyjIomwE5o9bUE0dhU3TPTW0YmY8aZgh1T5l2cq9K4cbHCJlK6FvwPWT7cYaCzb_dCPFoG1c6DNwkJNBKiR7luogy6wg_x1XKhnZphJasy3vvgOK4O6HE_zviZD3jSDqXnpt5eeeIzWz4p070vi1UURfj13c43DP0De4JgP8Dhcs76OE3YjPTiSqroT31eSCEYSZ5DjiNbd6975nyKU3b38uaAcGOFeiDuNFlCE8L-b-AzwlqPzfVbeC_2sqCh0YACZoo',
      alt: 'Professional mechanic using jump starter on car battery',
      buttonText: 'Request Jump Start',
      reversed: true,
    },
    {
      id: 'flat-tyre',
      icon: 'tire_repair',
      title: 'Flat Tyre Change',
      description: 'Professional tyre replacement service at your location. We carry spare tyres and repair equipment for quick solutions.',
      features: ['Quick Replacement', 'Puncture Repair', 'Spare Available', '24/7 Service'],
      image: '/services/s7.jpeg',
      alt: 'Technician changing flat tyre on a vehicle in UAE',
      buttonText: 'Fix My Tyre',
      reversed: false,
    },
    {
      id: 'fuel-delivery',
      icon: 'local_gas_station',
      title: 'Fuel Delivery',
      description: 'Emergency fuel delivery if you run out of petrol or diesel. We bring the fuel to you anywhere in Dubai and Abu Dhabi.',
      features: ['Petrol & Diesel', 'Emergency Supply', 'Quick Response', '24/7 Service'],
      image: '/services/s8.jfif',
      alt: 'ENOC fuel delivery vehicle providing emergency petrol in Dubai',
      buttonText: 'Get Fuel Delivery',
      reversed: true,
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`px-4 md:px-20 lg:px-40 py-16 relative overflow-hidden ${
            service.reversed ? 'bg-[#2d2914]/30' : ''
          }`}
        >
          {/* subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content Column */}
            <div
              className={`order-2 ${
                service.reversed ? 'md:order-2' : 'md:order-1'
              } transition-all duration-500`}
            >
              <div className="flex flex-col gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-3 rounded-xl material-symbols-outlined text-3xl transition-all duration-300 hover:scale-110 hover:bg-primary/20">
                    {service.icon}
                  </span>
                  <h3 className="text-3xl font-black text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-300">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:scale-[1.02]"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="w-fit flex items-center justify-center rounded-lg h-12 px-8 bg-slate-800 text-white hover:bg-primary hover:text-background-dark transition-all duration-300 font-bold group shadow-lg hover:shadow-primary/30"
                >
                  {service.buttonText}
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div
              className={`order-1 ${
                service.reversed ? 'md:order-1' : 'md:order-2'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/30">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}