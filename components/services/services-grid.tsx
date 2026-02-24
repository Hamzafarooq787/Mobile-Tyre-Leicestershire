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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX8rQRtzpFasOzdoL4dlhMLTyciaD0NfnsEzut9eKUQofR0arkxxvZrXt3BEc2FIVfihvyzFc4iV6G3KaWA17X7ZE2aEduEYEk8sqzY_9pE_eZtINS-e_cqhMmwrlSJtEC1w0U25C34Ul3M0aYLpCim0QkiVVShNwkenCHlRMuG1Gyw1bkrzBJJZ2YMpd6eTaQkldVMk6wUweHVQcrQ-SUJ57a1PIv1nlPp4c_V3TyNDk2zYh773hIOOcyJQsn8JXVjSHBQioPwQc',
      alt: 'Tow truck providing emergency vehicle recovery on Abu Dhabi highway',
      buttonText: 'Request Emergency Towing',
      reversed: false, // image on right
    },
    {
      id: 'breakdown-recovery',
      icon: 'build',
      title: 'Breakdown Recovery',
      description: 'Fast response for mechanical failures. We will get you and your vehicle to safety with our expert technicians.',
      features: ['Engine Failure', 'Transmission Issues', 'Electrical Faults', 'Safe Transport'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3D49vR8q4s-LB5Nu-3bpT49YDNZcouojy-75UGw-3T1ZvTlr0OQHDegjEzhHPmI7soGH4Y2E4J8ZVQ6XLesfWdsM4Dv9xU3NQcmoTzCjHHkRtgIT5akxjTD2hj1SVYm-YcMQrhu20GbbhbaZh-gT7llbv298cHWNw2ZHvXyWdpzaGv8muAsiLRXVJhzLIfwJV6XP1d_vS4LxcvVhQSx5MnMMWSyYA_2ifdoWe5lxujjdk_CZxWq0wJc8q2eL7tO_zye_oUH6k9Tc',
      alt: 'Professional mechanic assisting with vehicle breakdown on UAE roadside',
      buttonText: 'Get Breakdown Help',
      reversed: true, // image on left
    },
    {
      id: 'accident-recovery',
      icon: 'warning',
      title: 'Accident Recovery',
      description: 'Professional collision recovery with careful handling of damaged vehicles. We manage post-accident logistics with care.',
      features: ['Collision Recovery', 'Insurance Support', 'Careful Handling', '24/7 Response'],
      image: 'https://media.istockphoto.com/id/1419815848/photo/car-evacuation-police-service-by-tow-truck-machine-on-city-downtown-street-center-due-parking.jpg',
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
      image: 'https://media.istockphoto.com/id/1274086803/photo/attractive-young-woman-looking-sad-calling-car-service-assistance-or-tow-truck-while-having.jpg',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX8rQRtzpFasOzdoL4dlhMLTyciaD0NfnsEzut9eKUQofR0arkxxvZrXt3BEc2FIVfihvyzFc4iV6G3KaWA17X7ZE2aEduEYEk8sqzY_9pE_eZtINS-e_cqhMmwrlSJtEC1w0U25C34Ul3M0aYLpCim0QkiVVShNwkenCHlRMuG1Gyw1bkrzBJJZ2YMpd6eTaQkldVMk6wUweHVQcrQ-SUJ57a1PIv1nlPp4c_V3TyNDk2zYh773hIOOcyJQsn8JXVjSHBQioPwQc',
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
      image: 'https://media.istockphoto.com/id/1407317747/photo/middle-aged-handsome-man-changing-his-car-tires-in-a-rural-road.jpg',
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
      image: 'https://www.plantmachineryvehicles.com/upload/articles/6760b0c1da479_ENOC-Link-1.jpg',
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
          className={`px-4 md:px-20 lg:px-40 py-16 ${
            service.reversed ? 'bg-[#2d2914]/30' : ''
          }`}
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div
              className={`order-2 md:order-${service.reversed ? '2' : '1'} ${
                service.reversed ? '' : ''
              }`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-3 rounded-xl material-symbols-outlined text-3xl">
                    {service.icon}
                  </span>
                  <h3 className="text-3xl font-black text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-300">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="w-fit flex items-center justify-center rounded-lg h-12 px-8 bg-slate-800 text-white hover:bg-slate-700 transition-all font-bold group"
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
              className={`order-1 md:order-${service.reversed ? '1' : '2'}`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
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