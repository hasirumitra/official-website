import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES, FEATURE_IMAGES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  // Helper to get image key based on index/id logic
  const getImageKey = (id: number) => {
    const keys = Object.keys(FEATURE_IMAGES);
    return keys[id - 1] || keys[0];
  };

  return (
    <section id="features" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-leaf">8 Powerful Tools.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to manage your farm from sowing to selling, powered by cutting-edge AI.
          </p>
        </div>

        <div className="space-y-32">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-24 items-center group`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(61,118,96,0.2)] mb-2 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-golden font-medium tracking-wide">
                    {feature.subtitle}
                  </p>
                </div>
                <ul className="space-y-5">
                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300">
                      <div className="mt-1 p-1 rounded-full bg-leaf/20 text-leaf">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 group/btn flex items-center gap-3 text-white font-bold text-lg hover:text-golden transition-colors">
                  {feature.cta}
                  <span className="p-2 bg-white/5 rounded-full group-hover/btn:bg-golden group-hover/btn:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              {/* Visual/Mockup */}
              <div className="flex-1 w-full perspective-1000">
                <motion.div
                  whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl"
                >
                  {/* Main Image */}
                  <img
                    src={Object.values(FEATURE_IMAGES)[index]}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-contain bg-black/20 transition-transform duration-500"
                  />

                  {/* Removed overlays to show full screenshots */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;