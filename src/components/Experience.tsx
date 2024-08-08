import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'TechCorp Analytics',
      location: 'San Francisco, CA',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Remote',
      description: [
        'Developed machine learning models for customer behavior prediction with 87% accuracy',
        'Built data pipelines using Python, Pandas, and SQL to process 1M+ records daily',
        'Created interactive dashboards using Tableau and Power BI for stakeholder reporting',
        'Collaborated with senior data scientists on feature engineering and model optimization'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Tableau', 'Machine Learning'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: 'Jan 2024 - May 2024',
      type: 'Hybrid',
      description: [
        'Built responsive web applications using React, Node.js, and MongoDB',
        'Implemented RESTful APIs serving 10k+ daily requests with optimal performance',
        'Integrated third-party payment systems and authentication services',
        'Participated in agile development cycles and code reviews with senior developers'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'JavaScript'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Software Engineering Intern',
      company: 'InnovateTech Solutions',
      location: 'Seattle, WA',
      duration: 'Jun 2023 - Aug 2023',
      type: 'On-site',
      description: [
        'Developed C++ applications for data processing and algorithm optimization',
        'Worked on database design and optimization using SQL and NoSQL technologies',
        'Contributed to open-source projects and internal tool development',
        'Gained experience with version control, testing frameworks, and CI/CD pipelines'
      ],
      technologies: ['C++', 'SQL', 'NoSQL', 'Git', 'Linux', 'Data Structures'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900" data-animation="animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building expertise through meaningful internships and real-world projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                data-stagger
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-gray-900 animate-glow"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="magical-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl text-blue-400 font-semibold mb-2">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row gap-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-white font-medium mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-purple-500/50 btn-hover"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="magical-card bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto" data-stagger>
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-400 mb-6">
              Looking for full-time opportunities to apply my skills and continue growing as a developer
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold btn-hover"
            >
              Let's Connect
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;