import { Heart, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vedant Dindore
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full Stack Developer & Data Scientist passionate about creating innovative solutions 
              and building the future through technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-white font-semibold">Let's Connect</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Email:</span> dindorevedant28@email.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-gray-300">Location:</span> Pune, Maharashtra, India
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Vedant Dindore. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Code size={14} />
              <span>with</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>&</span>
              <Coffee size={14} className="text-amber-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;