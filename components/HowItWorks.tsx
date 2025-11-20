import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, LayoutGrid, Sprout } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <Smartphone size={32} />, title: "Sign Up Free", desc: "Create account in 30 seconds. No credit card." },
    { icon: <LayoutGrid size={32} />, title: "Choose Tools", desc: "Select the modules you need for your crop." },
    { icon: <Sprout size={32} />, title: "Transform Farm", desc: "Get AI insights and watch profits grow." },
  ];

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-white/5 via-golden/50 to-white/5 z-0"></div>

            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 border border-golden/20 shadow-[0_0_30px_rgba(244,214,122,0.1)] group hover:scale-110 transition-transform duration-300">
                        <div className="text-golden group-hover:text-white transition-colors">{step.icon}</div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-forest rounded-full flex items-center justify-center text-white font-bold border border-white/20">
                            {idx + 1}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 max-w-xs">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;