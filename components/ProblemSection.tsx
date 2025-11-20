import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, FileX, Users } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const stats = [
    { icon: <TrendingDown size={40} />, val: "15-25%", desc: "Crop Loss Annually", color: "text-red-400" },
    { icon: <AlertTriangle size={40} />, val: "30-40%", desc: "Below Fair Price", color: "text-orange-400" },
    { icon: <FileX size={40} />, val: "60%", desc: "Miss Gov Schemes", color: "text-yellow-400" },
    { icon: <Users size={40} />, val: "1:1000", desc: "Officer to Farmer Ratio", color: "text-blue-400" },
  ];

  return (
    <section className="py-24 bg-[#0a101e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            The <span className="text-golden">₹90,000 Crore</span> Problem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Indian farmers face massive challenges daily. Lack of data, disease outbreaks, and market volatility consume profits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/10 transition-all"
            >
              <div className={`flex justify-center mb-6 ${stat.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-display">{stat.val}</div>
              <div className="text-gray-400 font-medium">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;