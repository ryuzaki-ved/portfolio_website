import React from 'react';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Analytics Platform',
      category: 'Full Stack + Data Science',
      description: 'A comprehensive analytics platform that processes customer data to provide business insights, featuring real-time dashboards, predictive analytics, and automated reporting.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Scikit-learn', 'Chart.js'],
      features: [
        'Real-time data visualization',
        'Customer behavior prediction',
        'Automated report generation',
        'RESTful API architecture'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'ML-Powered Image Classifier',
      category: 'Machine Learning',
      description: 'Deep learning application that classifies images with 94% accuracy using convolutional neural networks, deployed with a user-friendly web interface.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React', 'Docker'],
      features: [
        'Real-time image processing',
        'Custom CNN architecture',
        'Batch processing capability',
        'Model performance metrics'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Distributed Task Management System',
      category: 'Backend + DevOps',
      description: 'Scalable task management system built with microservices architecture, featuring real-time collaboration, automated workflows, and comprehensive monitoring.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Socket.io'],
      features: [
        'Microservices architecture',
        'Real-time collaboration',
        'Automated task workflows',
        'Performance monitoring'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Social Media Sentiment Analyzer',
      category: 'Data Science + NLP',
      description: 'Advanced sentiment analysis tool that processes social media data to provide insights into public opinion trends, featuring real-time monitoring and visualization.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLTK', 'Pandas', 'Twitter API', 'Dash', 'MongoDB'],
      features: [
        'Real-time sentiment tracking',
        'Trend analysis dashboard',
        'Multi-platform data collection',
        'Automated reporting system'
      ],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black" data-animation="animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of projects demonstrating full-stack development, data science, and machine learning expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group magical-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 overflow-hidden"
              data-stagger
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} p-2 rounded-lg text-white`}>
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600 hover:border-purple-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg btn-hover flex-1 justify-center"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className={`flex items-center gap-2 bg-gradient-to-r ${project.color} hover:opacity-90 text-white px-4 py-2 rounded-lg btn-hover flex-1 justify-center`}
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-16">
          <div className="magical-card bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto" data-stagger>
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-400 mb-6">
              Currently working on several exciting projects involving advanced ML algorithms, 
              blockchain development, and cloud-native applications.
            </p>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold btn-hover"
            >
              <Github size={18} />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;