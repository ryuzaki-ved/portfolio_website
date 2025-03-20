import React, { useState } from 'react';
import { Github, ExternalLink, Code, Brain, TrendingUp, Briefcase } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Data Analysis');

  const categories = [
    { name: 'Data Analysis', icon: <TrendingUp className="w-5 h-5" />, color: 'from-cyan-500 to-blue-600' },
    { name: 'Machine Learning', icon: <Brain className="w-5 h-5" />, color: 'from-orange-500 to-amber-600' },
    { name: 'JS (React, Node, etc.)', icon: <Code className="w-5 h-5" />, color: 'from-blue-500 to-cyan-600' },
    { name: 'Freelance Projects', icon: <Briefcase className="w-5 h-5" />, color: 'from-emerald-500 to-teal-600' }
  ];

  const projects = [
    // Data Analysis
    {
      title: 'Options Data Analytics Platform',
      category: 'Data Analysis',
      description: 'Automated pipeline for NSE EOD options data (100K+ daily records) with validation; SQL/Pandas analytics to surface pricing patterns, volatility trends, and OI anomalies; interactive dashboard cut manual analysis by ~62%.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'SQL', 'DuckDB', 'Pandas', 'React'],
      github: 'https://github.com/ryuzaki-ved/NSE-EOD-Data-Analyzer',
      demo: 'https://nse-eod-data-analyzer.vercel.app/'
    },
    {
      title: 'Customer Segmentation Analysis',
      category: 'Data Analysis',
      description: 'Preprocessed 50K+ transactions; RFM features and K-means produced 11 customer segments; Power BI dashboards highlighted CLV/retention with top 12% driving ~45% revenue; validated with hypothesis testing and recommendations.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Scikit-learn'],
      github: 'https://app.powerbi.com/view?r=eyJrIjoiOWZhZmE1NDUtMGVmMi00N2VhLWE0MDQtZGIwNDczNTIyZmRkIiwidCI6ImRkNTJlM2VkLWE1MDYtNDQ1Yy1hZjQ4LTQwYjI5ZTY4NWQzZiJ9',
      demo: 'https://app.powerbi.com/view?r=eyJrIjoiOWZhZmE1NDUtMGVmMi00N2VhLWE0MDQtZGIwNDczNTIyZmRkIiwidCI6ImRkNTJlM2VkLWE1MDYtNDQ1Yy1hZjQ4LTQwYjI5ZTY4NWQzZiJ9'
    },
    // Machine Learning
    {
      title: 'Stock Forecasting Models',
      category: 'Machine Learning',
      description: 'Built traditional ML and deep learning models (Scikit-learn, LSTM) on engineered market features to forecast price/action; evaluated with walk-forward validation and error metrics.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'LSTM', 'NumPy'],
      github: 'https://github.com/ryuzaki-ved/stock_ml_model',
      demo: 'https://github.com/ryuzaki-ved/stock_ml_model'
    },
    {
      title: 'CKD Detection using ML',
      category: 'Machine Learning',
      description: 'Neural network to predict Chronic Kidney Disease using the UCI CKD dataset. Includes data cleaning, imputation, feature engineering, class balancing, model training with Keras, and SHAP explainability.',
      image: 'https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'SHAP'],
      github: 'https://github.com/ryuzaki-ved/ckd_detection',
      // demo: 'https://github.com/ryuzaki-ved/ckd_detection'
    },
    // JS (React, Node, etc.)
    {
      title: 'Progress Tracker (Gamified)',
      category: 'JS (React, Node, etc.)',
      description: 'Advanced progress tracker with gamification: streaks, XP, achievements, and goals; responsive UI and persistent storage.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/ryuzaki-ved/progress_tracker',
      demo: 'https://progress-tracker-theta-two.vercel.app/'
    },
    // Freelance
    {
      title: 'Options Model – Real-Time Signals',
      category: 'Freelance Projects',
      description: 'Real-time options analytics over large datasets producing buy/sell signals; LSTM and feature-rich pipelines; streaming ingestion with latency-aware processing.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Kafka', 'FastAPI'],
      // github: 'https://github.com',
      // demo: 'https://demo.example.com'
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-black py-20 scroll-mt-16" data-animation="animate-fade-in">
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