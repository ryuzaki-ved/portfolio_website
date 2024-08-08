import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'Data Scientist',
    'Machine Learning Engineer',
    'Python Developer'
  ];

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-16 flex items-center justify-center">
              <span className="border-r-2 border-blue-400 pr-1">
                {currentText}
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate fresher developer specializing in full-stack development, data science, 
            and machine learning. Ready to bring innovative solutions to your team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;