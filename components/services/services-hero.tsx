export default function ServicesHero() {
  return (
    <section
      className="bg-darkBg text-center py-32 px-4"
      style={{
        backgroundImage: 'linear-gradient(rgba(11,22,37,0.85), rgba(11,22,37,0.95)), url(https://images.unsplash.com/photo-1605559424843-9e4c228d5c2c?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          OUR <span className="text-primary">TYRE SERVICES</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Professional, reliable, and mobile. We bring the tyre shop directly to your doorstep — fast response,
          zero stress, and complete peace of mind across Leicestershire.
        </p>
      </div>
    </section>
  );
}