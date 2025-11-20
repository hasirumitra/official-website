import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-[#0f172a]">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        See Hasiru Mitra in <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-leaf">Action</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Experience how our AI technology is revolutionizing farming across India.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.2)] group"
                >
                    {/* Futuristic Frame Overlay */}
                    <div className="absolute inset-0 pointer-events-none z-20 border-[1px] border-white/10 rounded-3xl">
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-golden/50 rounded-tl-3xl"></div>
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-golden/50 rounded-tr-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-golden/50 rounded-bl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-golden/50 rounded-br-3xl"></div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-golden via-leaf to-teal opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/j5hd_KM_Fqc?rel=0&modestbranding=1"
                        title="Hasiru Mitra Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="relative z-10 w-full h-full bg-black/50"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
