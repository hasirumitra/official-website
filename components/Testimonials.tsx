import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0f172a] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-center mb-16">
          Farmers <span className="text-leaf">Love Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-panel p-8 rounded-2xl border border-white/10 relative group hover:bg-white/5 transition-colors">
              <Quote className="absolute top-8 right-8 text-white/10 w-10 h-10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-golden object-cover" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.location}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-golden text-golden" />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;