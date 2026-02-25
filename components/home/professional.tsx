export default function ProfessionalSection() {
  return (
    <section className="py-20 bg-background" data-purpose="intro-content" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose Mobile Tyre Leicestershire?
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                We understand that a flat tyre can happen at the worst possible time. That's why we bring the
                garage to you, whether you're at home, work, or stuck on the roadside.
              </p>
              <p>
                Our expert technicians are equipped with state-of-the-art tools to provide a seamless tyre
                fitting service anywhere in Leicestershire. We pride ourselves on rapid response times and
                professional excellence.
              </p>
              <ul className="space-y-2 pt-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Average 30-60 minute arrival
                  time
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Home, work, or roadside
                  assistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span> Experienced & certified fitters
                </li>
              </ul>
            </div>
          </div>
          {/* Intro Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary opacity-20 blur-xl rounded-custom group-hover:opacity-30 transition-opacity"></div>
            <img
              alt="Technician fitting tyre at night"
              className="relative rounded-custom shadow-2xl w-full h-[400px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5gJGR847BjGQhS3okWnkpICzeSBwdPvo1tcpaUYNxaYlY_BMl6zSWcWkAMU5WtrUkqxTQNHzVABjzIGDZEWLaYFIUstF1T4G_lM-LmD3XAwbCw-HOPTeeU9E2c3MM5hPtBV5cZLmW1zG_1-1so4i7sJhYyDUCqxE-ODdsLEbIezoCkpmi-UwUmlgtzmBIbcGz2_hM2dxA38xE2zfRCz0ixlOgKKTpufOrfflYFA9qSVMGbp2QRip8E5ZqsbFchvdJPDT1PV4tPOw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}