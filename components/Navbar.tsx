import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl shadow-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10">
              <img 
                src="/logo.png" 
                alt="Hasiru Mitra Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 bg-gradient-to-br from-forest to-leaf rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white tracking-tight group-hover:opacity-90 transition-opacity">
                Hasiru<span className="text-golden">Mitra</span>
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-golden px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-golden transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-black font-bold py-2.5 px-6 rounded-full shadow-[0_0_20px_rgba(244,214,122,0.3)] hover:shadow-[0_0_30px_rgba(244,214,122,0.5)] transition-all transform hover:scale-105">
                Download App
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-golden block px-3 py-4 rounded-md text-base font-medium border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full mt-4 bg-golden text-forest font-bold py-3 px-6 rounded-lg shadow-lg">
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;