import React from 'react';
import { Code, Database, Brain, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Building modern web applications with React, Python, and cutting-edge technologies'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Working with SQL, NoSQL, and Hadoop for scalable data solutions'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Developing intelligent solutions using advanced ML algorithms and techniques'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Strong foundation in algorithms and data structures with C++ expertise'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate computer science graduate with a strong foundation in software development and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a recent computer science graduate, I've immersed myself in the world of technology with an 
                insatiable curiosity for learning. My journey began with a fascination for problem-solving, 
                which led me to explore various domains from web development to machine learning.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Through three meaningful internships, I've gained hands-on experience in full-stack development, 
                data analysis, and AI/ML projects. Each experience has shaped my understanding of how technology 
                can create meaningful impact in the real world.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about building scalable solutions, working with data to derive insights, and 
                contributing to projects that make a difference. Always eager to learn new technologies and 
                take on challenging problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-2xl font-bold text-white mb-2">15+</h4>
                <p className="text-gray-400">Technologies Learned</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="text-2xl font-bold text-white mb-2">3</h4>
                <p className="text-gray-400">Internships Completed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;