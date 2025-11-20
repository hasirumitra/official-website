import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0a101e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Start for free, upgrade when you grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 ${
                tier.isPopular 
                  ? 'bg-gradient-to-b from-forest/80 to-teal/80 border-2 border-golden shadow-2xl scale-105 z-10' 
                  : 'glass-panel border border-white/10'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-golden text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className={`mt-0.5 ${tier.isPopular ? 'text-golden' : 'text-leaf'}`} />
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 ${
                tier.isPopular 
                  ? 'bg-golden hover:bg-yellow-400 text-black shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;