export default function CTABanner() {
  return (
    <section className="bg-darkCard py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We stock a wide range of tyres for all vehicle makes and models.
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Don’t wait around. Our mobile team is ready to reach you anywhere in Leicestershire. Call now for
          immediate assistance and drive stress-free.
        </p>
        <a
          href="tel:07599298404"
          className="inline-block bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-custom text-lg transition-all transform hover:scale-105 shadow-lg shadow-secondary/20"
        >
          Call 07599 298404
        </a>
      </div>
    </section>
  );
}