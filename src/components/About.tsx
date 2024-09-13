import React from 'react';
import { Code, Database, Brain, Trophy, Lightbulb, Users } from 'lucide-react';

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

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-20 scroll-mt-16" data-animation="animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-3">
            Computer science graduate with hands-on experience in full-stack development, data engineering, and machine learning.
            Completed three internships focused on building scalable solutions and delivering impactful technology projects.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging technology to solve real-world problems and continuously learning new skills to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-stagger>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg text-white">
                    {highlight.icon}
                  </div>
                  <h4 className="text-sm font-medium text-white leading-tight">{highlight.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-stagger>
            {values.map((value, index) => (
              <div
                key={index}
                className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2 rounded-lg text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-medium text-white mb-1">{value.title}</h4>
                    <p className="text-xs text-gray-500 leading-tight">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" data-stagger>
            <div className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="text-xl font-bold text-white mb-1">15+</h4>
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
            <div className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="text-xl font-bold text-white mb-1">3</h4>
              <p className="text-xs text-gray-400">Internships</p>
            </div>
            <div className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="text-xl font-bold text-white mb-1">10+</h4>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="magical-card bg-gray-800/50 p-4 rounded-lg border border-gray-700 text-center">
              <h4 className="text-xl font-bold text-white mb-1">2024</h4>
              <p className="text-xs text-gray-400">Graduate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;