import React from 'react';
import { Code, Database, Brain, Trophy, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Full Stack Development',
      description: 'React, Python, Node.js'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Data Engineering',
      description: 'SQL, NoSQL, Hadoop'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Scikit-learn'
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: 'Problem Solving',
      description: 'C++, Algorithms, DSA'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Innovation',
      description: 'Exploring cutting-edge technologies and creative solutions'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Collaboration',
      description: 'Team player with strong communication skills'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="relative p-8 rounded-2xl bg-gray-900/30 backdrop-blur-md border border-gray-800/50 shadow-2xl mb-12 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 relative z-10">
              Computer science graduate with hands-on experience in full-stack development, data engineering, and machine learning.
              Completed three internships focused on building scalable solutions and delivering impactful technology projects.
            </p>
            <p className="text-base text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10">
              Passionate about leveraging technology to solve real-world problems and continuously learning new skills to stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-gray-800/50 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25">
                    {highlight.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg">{highlight.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 p-3 rounded-lg bg-gray-800/50 text-blue-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 shadow-lg">
                  {value.icon}
                </div>
                <div className="relative z-10 text-left">
                  <h3 className="font-bold text-white text-lg mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;