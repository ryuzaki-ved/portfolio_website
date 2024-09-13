import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vedant Dindore
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & Data Scientist passionate about creating innovative solutions 
              and building the future through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
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
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Let's Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span> dindorevedant28@email.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span> Pune, India
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Status:</span> Open to opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vedant Dindore. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <Code size={16} className="text-blue-400" />
              <span>and</span>
              <Coffee size={16} className="text-yellow-600" />
            </div>

            {/* Back to top */}
            <a
              href="#home"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;