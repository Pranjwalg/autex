const HeroSection = () => {
  return (
    <section className="bg-[#1C1C1C] min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            World-Class Web Apps
            <br />
            <span className="text-3xl lg:text-5xl">
              On-Time. On-Budget. On-Point.
            </span>
          </h1>
          <p className="text-white text-lg lg:text-2xl mb-8">
            Our expertise lies in delivering Web & Mobile Apps, UI/UX, and
            Infrastructure
          </p>
          <button className="bg-[#E84E36] text-white px-6 py-2 lg:px-8 lg:py-3 rounded text-base lg:text-lg hover:bg-[#d03d27] transition-colors">
            LET&apos;S TALK
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
