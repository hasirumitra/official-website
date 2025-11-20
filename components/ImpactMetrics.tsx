import React from 'react';
import { motion } from 'framer-motion';
import { METRICS } from '../constants';

const ImpactMetrics: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-[#0f172a] to-forest/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-12 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/10">
            {METRICS.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 font-display">
                    {metric.value}
                  </span>
                  <span className="text-2xl md:text-3xl text-golden font-bold align-top ml-1">
                    {metric.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;