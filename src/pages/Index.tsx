
// Photoshoto Landing Page

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white font-sans">
      <Helmet>
        <title>Photoshoto — Capture, Store &amp; Relive</title>
        <meta name="description" content="Photoshoto helps you organize and showcase your favorite memories. Capture, store, and relive every moment!" />
        <meta name="keywords" content="photo storage, photo gallery, personal photos, album organizer, photo descriptions, photo landing page" />
      </Helmet>
      <Navbar />
      <Hero />
      <Features />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
