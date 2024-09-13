import React from 'react';
import { Code, Database, Brain, Layers, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Languages',
      color: 'from-cyan-500 to-blue-600',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'ML & AI',
      color: 'from-orange-500 to-amber-600',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas']
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-600',
      skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend & Data',
      color: 'from-emerald-500 to-teal-600',
      skills: ['Node.js', 'SQL', 'MongoDB', 'Hadoop']
    }
  ];

  const tools = [
    'Jupyter', 'Git', 'Redis', 'PowerBI',
    'Flask', 'Django', 'REST APIs', 'AWS', 'GraphQL',
    'Express.js', 'Postman', 'Figma', 'OpenCV'
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black py-20 scroll-mt-16" data-animation="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Crafting innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" data-stagger>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="magical-card group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-gray-600 hover:bg-gray-700/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="magical-card bg-gray-900/50 p-6 rounded-xl border border-gray-800" data-stagger>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white text-center">Tools & Platforms</h3>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;