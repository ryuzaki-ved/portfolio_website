import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [animationState, setAnimationState] = useState('hello');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Machine Learning Engineer',
    'Data Scientist',
    'Data Analyst',
    'Software Engineer',
    'Python Developer'
  ];

  // Animation sequence for Hello text and emoji
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAnimationState('emoji');
    }, 2000); // Show "Hello" for 2 seconds, then transition to emoji

    const timer2 = setTimeout(() => {
      setAnimationState('hello');
    }, 4500); // Show emoji for 2.5 seconds, then transition back to "Hello"

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="relative inline-block">
                <span 
                  className={`transition-all duration-500 ease-in-out ${
                    animationState === 'hello' 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                >
                  Hello,
                </span>
                <span 
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    animationState === 'emoji' 
                      ? 'opacity-100 animate-wiggle' 
                      : 'opacity-0'
                  } text-6xl sm:text-7xl lg:text-8xl`}
                >
                  👋
                </span>
              </span>
              <span className="block mt-6">
                I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Vedant Dindore
                </span>
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-16 flex items-center justify-center"
            >
              <span className="border-r-2 border-cyan-400 pr-1">
                {currentText}
              </span>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate fresher developer specializing in full-stack development, data science, 
            and machine learning. Ready to bring innovative solutions to your team.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get In Touch
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white px-6 py-4 rounded-full font-semibold text-lg btn-hover flex items-center gap-2 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Eye size={20} />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download="Vedant_Dindore_Resume.pdf"
                className="border-2 border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white px-6 py-4 rounded-full font-semibold text-lg btn-hover flex items-center gap-2 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Download size={20} />
                Download
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-cyan-400 transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;