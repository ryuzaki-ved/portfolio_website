import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer',
      company: 'Gradient Labs',
      location: 'Mumbai, Maharashtra, India',
      duration: 'Feb 2025 - May 2025',
      type: 'Remote',
      description: [
        'Built and trained CNN, LSTM, and regression models using TensorFlow and Scikit-learn on 10-30GB datasets for fraudulent trade detection and e-commerce forecasting, achieving 83% prediction accuracy',
        'Optimized data preprocessing pipeline and model training processes, reducing training time by 12.8% through hyperparameter tuning and efficient data handling across multiple deep learning architectures',
        'Executed exploratory data analysis and feature engineering on large-scale datasets (10-30GB), building machine learning models for fraud detection, sales prediction, and time-series forecasting applications'
      ],
      technologies: ['Machine Learning Algorithms', 'Python (Programming Language)'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Data Analytics',
      company: 'Mehta Financial Corporation',
      location: 'Pune, Maharashtra, India',
      duration: 'Sep 2024 - Jan 2025',
      type: 'Hybrid',
      description: [
        'Automated ETL pipeline processing 50K+ daily stock and options records using Python & PostgreSQL, reducing manual data processing time by 57% for trading operations',
        'Built predictive models (Random Forest, XGBoost) on 500K+ historical market records achieving 78% accuracy for trend classification; implemented anomaly detection for pricing irregularities',
        'Conducted exploratory data analysis on options data using Python (pandas, NumPy) and created visualization dashboards tracking price-volume correlations for daily market review'
      ],
      technologies: ['Data Analysis', 'Machine Learning', 'Time Series Forecasting', 'Quantitative Research', 'Model Evaluation'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'OptionFlowX',
      company: 'Fiverr',
      location: 'Pune, Maharashtra, India',
      duration: 'Feb 2024 - Apr 2024',
      type: 'Remote',
      description: [
        'Designed and developed an interactive web app to visualize live and historical options data with advanced charts like heatmaps, IV skew, and OI ladders',
        'Used Python (Plotly, Dash) and integrated APIs to fetch real-time market data',
        'Delivered a dashboard used by retail traders to make informed decisions on options flow and volatility'
      ],
      technologies: ['Data Visualization', 'Python', 'Real-Time Market Data APIs', 'Interactive Charting Libraries (React.js)'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Motilal Oswal Financial Services Ltd',
      location: 'Pune, Maharashtra, India',
      duration: 'Apr 2023 - Aug 2023',
      type: 'Hybrid',
      description: [
        'Developed and optimized machine learning models for options market forecasting, improving prediction accuracy by 35%',
        'Conducted data preprocessing, feature engineering, and model evaluation using real-time financial datasets',
        'Delivered actionable insights to assist traders and analysts, enhancing strategic decision-making and risk management'
      ],
      technologies: ['Machine Learning', 'Time Series Forecasting', 'Python', 'Options Market Analytics', 'Real-Time Data Processing', 'Predictive Modeling'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Software Developer',
      company: 'Sutherland',
      location: 'London Area, United Kingdom',
      duration: 'Aug 2022 - Nov 2022',
      type: 'Remote',
      description: [
        'Designed and optimized backend algorithms for clients in banking, research, and proprietary software domains',
        'Improved data processing speed and system performance, achieving a 18% increase in overall efficiency',
        'Collaborated with cross-functional teams to implement scalable backend solutions tailored to diverse business needs'
      ],
      technologies: ['Algorithm Optimization', 'Python', 'REST APIs', 'SQL / NoSQL Databases', 'Backend Architecture', 'Scalable Systems Design'],
      color: 'from-rose-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
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
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Building expertise through meaningful internships and real-world projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
            ></motion.div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 border-2 border-cyan-500 z-10 mt-6">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20"></div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2">
                  <div className={`magical-card group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-cyan-500" />
                          <span className="text-white font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-cyan-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan-500" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-cyan-500/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="magical-card bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 max-w-2xl mx-auto transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-2">Ready for New Challenges</h3>
            <p className="text-sm text-gray-400 mb-4">
              Looking for full-time opportunities to apply my skills and continue growing
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold btn-hover text-sm transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Let's Connect
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;