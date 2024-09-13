import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Brain, TrendingUp, Briefcase } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Data Analysis');

  const categories = [
    { name: 'Data Analysis', icon: <TrendingUp className="w-5 h-5" />, color: 'from-cyan-500 to-blue-600' },
    { name: 'Machine Learning', icon: <Brain className="w-5 h-5" />, color: 'from-orange-500 to-amber-600' },
    { name: 'JS (React, Node, etc.)', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-600' },
    { name: 'Freelance Projects', icon: <Briefcase className="w-5 h-5" />, color: 'from-emerald-500 to-teal-600' }
  ];

  const projects = [
    {
      title: 'E-Commerce Analytics Platform',
      category: 'Data Analysis',
      description: 'A comprehensive analytics platform that processes customer data to provide business insights, featuring real-time dashboards and automated reporting.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'PostgreSQL', 'Chart.js', 'PowerBI'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Social Media Sentiment Analyzer',
      category: 'Data Analysis',
      description: 'Advanced sentiment analysis tool that processes social media data to provide insights into public opinion trends and visualization.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLTK', 'Pandas', 'Twitter API', 'Matplotlib'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'ML-Powered Image Classifier',
      category: 'Machine Learning',
      description: 'Deep learning application that classifies images with 94% accuracy using convolutional neural networks and custom CNN architecture.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'NumPy'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Predictive Maintenance Model',
      category: 'Machine Learning',
      description: 'Machine learning model that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'PyTorch', 'Flask', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Task Management System',
      category: 'JS (React, Node, etc.)',
      description: 'Scalable task management system built with microservices architecture, featuring real-time collaboration and automated workflows.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Real-Time Chat Application',
      category: 'JS (React, Node, etc.)',
      description: 'Full-featured chat application with real-time messaging, file sharing, and user presence indicators using WebSockets.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Socket.io', 'Redis', 'JWT'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'E-Learning Platform',
      category: 'Freelance Projects',
      description: 'Complete e-learning platform with course management, video streaming, progress tracking, and payment integration.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS S3'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      title: 'Restaurant Management System',
      category: 'Freelance Projects',
      description: 'Full-stack restaurant management solution with POS, inventory tracking, order management, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redux', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black py-12" data-animation="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A showcase of projects demonstrating full-stack development, data science, and machine learning expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" data-stagger>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`magical-card group relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600'
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl transition-opacity duration-300 ${
                activeCategory === category.name ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'
              }`}></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-3 shadow-lg transition-transform duration-300 ${
                  activeCategory === category.name ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                <h3 className={`text-sm font-bold transition-colors duration-300 ${
                  activeCategory === category.name ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="magical-card group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 overflow-hidden transition-all duration-300 hover:scale-105"
              data-stagger
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-gray-600 hover:bg-gray-700/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm btn-hover flex-1 justify-center transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm btn-hover flex-1 justify-center transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;