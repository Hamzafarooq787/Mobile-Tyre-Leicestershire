import Image from 'next/image';

export function ProfessionalSection() {
  return (
    <section className="py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDER0A8_Lcz0L95-fOyb2jYe21WihbXyH9G_JHpB7EZb9-83b4RJo81dnPQI97rNZWHMiAsqF-SU--gw0KZEPUxpZAJQ8Ubs7bQbTHJMWbsD4r5JcZTPKhqdtvI4otA32fMzUTHOYUQUyxUm9ybi6yGCmsYlRxZlF9B4ImAqgQkgtXt8n8R40zEsvTyzC3FASUv8Se-zcyufWTPoy549q887ob4oU_9LCnlk6jctsC27cYfSffyQwXWKZ8LIul49k-OvLjhRD38S74"
            alt="Luxury car being loaded onto a modern tow truck"
            width={800}
            height={600}
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl font-black dark:text-white leading-tight">
            Professional Roadside Help <br /> <span className="text-primary">When You Need It Most</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We understand that being stranded is stressful. Our mission is to provide the fastest, safest, and most professional car recovery service in the UAE.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                <span className="material-symbols-outlined text-primary text-xl font-bold">done</span>
              </div>
              <div>
                <h5 className="font-bold text-xl dark:text-white">Expert Team</h5>
                <p className="text-slate-500">Highly trained operators for delicate vehicle handling.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                <span className="material-symbols-outlined text-primary text-xl font-bold">done</span>
              </div>
              <div>
                <h5 className="font-bold text-xl dark:text-white">Modern Fleet</h5>
                <p className="text-slate-500">Equipped with latest flatbed and towing technology.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/20 p-1.5 rounded-full">
                <span className="material-symbols-outlined text-primary text-xl font-bold">done</span>
              </div>
              <div>
                <h5 className="font-bold text-xl dark:text-white">Fair Pricing</h5>
                <p className="text-slate-500">No hidden costs. Transparent and competitive rates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}