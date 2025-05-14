import { useState } from 'react';
import { Github, ExternalLink, Code, Brain, TrendingUp, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Data Analysis');

  const categories = [
    { name: 'Data Analysis', icon: <TrendingUp className="w-5 h-5" />, color: 'from-cyan-500 to-blue-600' },
    { name: 'Machine Learning', icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-600' },
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
      technologies: ['Python', 'Excel', 'Power BI'],
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
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A showcase of projects demonstrating full-stack development, data science, and machine learning expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.name)}
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                activeCategory === category.name
                  ? `bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105`
                  : 'bg-gray-900/50 border-gray-700 hover:border-gray-600 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <span className="font-semibold text-white text-sm">{category.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-cyan-400 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;