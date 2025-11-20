import React from 'react';
import { Leaf, Twitter, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/hasirumitra' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/hasirumitra' },
    { Icon: Youtube, href: 'https://youtube.com/@hasirumitra' },
  ];

  return (
    <footer className="bg-[#05090f] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-forest/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="relative w-8 h-8">
                  <img 
                    src="/logo.png" 
                    alt="Hasiru Mitra Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <Leaf className="hidden text-leaf w-8 h-8" />
               </div>
              <span className="text-2xl font-display font-bold">Hasiru<span className="text-golden">Mitra</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Indian farmers with next-gen technology. From soil to sale, we are your digital companion.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-golden hover:text-black transition-all cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Features</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['Crop Doctor', 'Market Price', 'Weather', 'Govt Schemes', 'Farm Records'].map(item => (
                <li key={item}><a href="#" className="hover:text-golden transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About Us', 'Careers', 'Blog', 'Partners', 'Press'].map(item => (
                <li key={item}><a href="#" className="hover:text-golden transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-golden">●</span>
                <a href="mailto:hasirumitrai@gmail.com" className="hover:text-white transition-colors">hasirumitrai@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden">●</span>
                <a href="tel:+919880973453" className="hover:text-white transition-colors">+91 98809 73453</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-golden">●</span>
                Bangalore, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>&copy; 2025 Hasiru Mitra Agritech Pvt Ltd. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;