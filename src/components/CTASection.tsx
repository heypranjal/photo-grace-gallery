
const CTASection = () => (
  <section className="container py-12 flex flex-col items-center" id="contact">
    <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
      Ready to Organize Your Memories?
    </h3>
    <a
      href="#home"
      className="mt-2 px-8 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 shadow-lg transition animate-scale-in"
      tabIndex={0}
    >
      Get Started
    </a>
  </section>
);

export default CTASection;
