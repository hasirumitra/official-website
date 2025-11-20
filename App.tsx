import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Features from './components/Features';
import ImpactMetrics from './components/ImpactMetrics';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-white selection:bg-golden selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <VideoSection />
        <ProblemSection />
        <Features />
        <ImpactMetrics />
        <HowItWorks />
        <Pricing />
        <Testimonials />

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-forest to-teal opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Ready to Transform Your Farm?
            </motion.h2>
            <p className="text-xl text-gray-200 mb-10">
              Join 10,000+ farmers using Hasiru Mitra to secure their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-golden hover:bg-white text-forest hover:text-forest font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full text-lg transition-all">
                Schedule Demo
              </button>
            </div>
            <p className="mt-6 text-sm text-white/60">No credit card required. 100% Free Forever plan available.</p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;