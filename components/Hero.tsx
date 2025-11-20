import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ShieldCheck, Star, CloudSun } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1920&auto=format&fit=crop"
          alt="Smart Farming India"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00695C]/90 via-[#0f172a]/95 to-[#0f172a] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
      </div>

      {/* Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-leaf/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-golden/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-golden opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-golden"></span>
              </span>
              <span className="text-golden text-xs md:text-sm font-bold tracking-widest uppercase">India's #1 Agri-Tech Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]"
            >
              Meet Your AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf via-golden to-leaf bg-300% animate-gradient">
                Farming Companion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Democratizing agricultural intelligence for the modern Indian farmer. Detect diseases instantly, predict market prices, and maximize crop yield with the power of AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-4 bg-golden hover:bg-yellow-400 text-forest font-bold rounded-xl shadow-[0_0_20px_rgba(244,214,122,0.3)] hover:shadow-[0_0_30px_rgba(244,214,122,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
                Start Free Trial <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="https://youtu.be/j5hd_KM_Fqc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-3 group text-lg"
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-300 font-medium"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-leaf" />
                <span>10,000+ Farmers</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <Star className="w-5 h-5 text-golden fill-golden" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1586297135537-94bc9ba060aa' : '1633332755192-727a05c4013d'}?w=50&h=50&fit=crop&crop=faces`} className="w-6 h-6 rounded-full border-2 border-forest object-cover" alt="User" />
                  ))}
                </div>
                <span>Joined recently</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - 3D Glass Card */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              {/* Main Glass Dashboard */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.5)] p-6 overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-teal flex items-center justify-center text-white font-bold shadow-lg">HM</div>
                    <div>
                      <div className="text-sm font-bold text-white">Hasiru Mitra</div>
                      <div className="text-xs text-gray-400">Premium Plan</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                </div>

                {/* Weather Card */}
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-5 mb-5 border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 blur-[40px] rounded-full group-hover:bg-blue-500/30 transition-colors"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <div className="text-xs text-blue-200 font-bold tracking-wider mb-1">WEATHER</div>
                      <div className="text-3xl font-display font-bold text-white">28°C</div>
                      <div className="text-xs text-gray-300 mt-1">Mandya • Sunny</div>
                    </div>
                    <CloudSun className="w-12 h-12 text-golden drop-shadow-lg" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-xs text-gray-400 font-bold mb-2">CROP HEALTH</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">98%</span>
                      <span className="text-xs text-green-400 mb-1">▲ 2%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[98%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="text-xs text-gray-400 font-bold mb-2">REVENUE</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-white">₹45k</span>
                      <span className="text-xs text-green-400 mb-1">▲ 12%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-golden h-full w-[75%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Market Trends Chart */}
                <div className="bg-black/20 rounded-2xl p-5 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-gray-400 font-bold">MARKET TRENDS</div>
                    <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold">LIVE</div>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24">
                    {[35, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="w-full bg-gradient-to-t from-golden/10 to-golden rounded-t-sm relative group"
                      >
                        <div className="absolute inset-x-0 top-0 h-full bg-golden opacity-0 group-hover:opacity-50 blur-sm transition-opacity"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements - Behind */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-golden/20 rounded-full blur-[50px] animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-forest/30 rounded-full blur-[50px] animate-pulse delay-700"></div>

              {/* Floating Notification - Front */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
                className="absolute top-20 -right-12 bg-[#1e293b] border border-white/10 p-4 rounded-xl shadow-2xl w-48 z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">ALERT</div>
                  <div className="text-xs font-bold text-white">Pest Detected</div>
                </div>
              </motion.div>

              {/* Floating Price Tag - Front */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 7, delay: 0.5, ease: "easeInOut" }}
                className="absolute bottom-32 -left-8 bg-[#1e293b] border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="text-green-500 font-bold text-xs">₹</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">TOMATO</div>
                  <div className="text-xs font-bold text-white">₹42/kg <span className="text-green-400">▲</span></div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;