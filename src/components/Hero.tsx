
const Hero = () => (
  <section className="container flex flex-col-reverse md:flex-row items-center gap-8 pt-12 md:pt-24 pb-10" id="hero">
    <div className="flex-1 text-center md:text-left animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
        Capture, Store <span className="text-accent">&amp; Relive</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
        Photoshoto helps you organize and showcase your favorite memories.
      </p>
      <a
        href="#gallery"
        className="inline-block px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 shadow-lg transition animate-scale-in"
        tabIndex={0}
      >
        Get Started
      </a>
    </div>
    <div className="flex-1 flex items-center justify-center relative animate-scale-in">
      {/* Floating photos for visual interest, hidden on xs */}
      <div className="relative w-64 h-52 md:w-80 md:h-64">
        <img
          className="absolute top-0 left-12 w-32 h-32 rounded-xl object-cover shadow-lg border-4 border-white z-20"
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
          alt="Gallery preview 1"
          loading="lazy"
        />
        <img
          className="absolute bottom-0 left-0 w-32 h-36 rounded-xl object-cover shadow-md border-4 border-white z-10"
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&q=80"
          alt="Gallery preview 2"
          loading="lazy"
        />
        <img
          className="absolute bottom-8 right-2 w-28 h-28 rounded-xl object-cover shadow-md border-4 border-white z-20"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
          alt="Gallery preview 3"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Hero;
