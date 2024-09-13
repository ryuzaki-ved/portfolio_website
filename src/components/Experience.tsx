import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

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
      color: 'from-emerald-500 to-teal-600'
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
      color: 'from-orange-500 to-amber-600'
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
      color: 'from-purple-500 to-pink-600'
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
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-black py-20 scroll-mt-16" data-animation="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Building expertise through meaningful internships and real-world projects
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-emerald-500 via-orange-500 via-purple-500 to-indigo-500 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-emerald-400 via-orange-400 via-purple-400 to-indigo-400 animate-timeline-flow"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-400 to-transparent blur-sm animate-timeline-glow"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                data-stagger
              >
                <div className="absolute left-4 md:left-1/2 w-5 h-5 transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-black border-2 border-gray-800"></div>
                  <div className={`absolute inset-0.5 bg-gradient-to-br ${exp.color} rounded-full animate-pulse`}></div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${exp.color} rounded-full blur-md opacity-60 animate-pulse`}></div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${exp.color} rounded-full blur-lg opacity-30 animate-ping`} style={{animationDuration: '3s'}}></div>
                </div>

                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="magical-card group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${exp.color} shadow-lg`}>
                              <Briefcase className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                          </div>
                          <h4 className="text-sm font-semibold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{exp.company}</h4>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white whitespace-nowrap`}>
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-3 text-gray-400 text-xs mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-gray-400 leading-relaxed flex items-start">
                              <span className={`w-1.5 h-1.5 bg-gradient-to-br ${exp.color} rounded-full mt-1.5 mr-2 flex-shrink-0`}></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-gray-600 hover:bg-gray-700/80 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="magical-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 max-w-2xl mx-auto transition-all duration-300" data-stagger>
            <h3 className="text-lg font-bold text-white mb-2">Ready for New Challenges</h3>
            <p className="text-sm text-gray-400 mb-4">
              Looking for full-time opportunities to apply my skills and continue growing
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold btn-hover text-sm transition-all duration-300"
            >
              Let's Connect
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;