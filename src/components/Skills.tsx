import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'C++', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-300 to-yellow-500' },
        { name: 'TypeScript', level: 80, color: 'from-blue-500 to-blue-700' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' }
      ]
    },
    {
      title: 'Data & ML',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Data Science', level: 88, color: 'from-pink-400 to-pink-600' },
        { name: 'Pandas/NumPy', level: 90, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Scikit-learn', level: 82, color: 'from-red-400 to-red-600' }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'NoSQL (MongoDB)', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Hadoop', level: 75, color: 'from-yellow-500 to-yellow-700' },
        { name: 'Git/GitHub', level: 92, color: 'from-gray-400 to-gray-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Docker', 'AWS', 'REST APIs', 'GraphQL', 'Redis', 'Jupyter',
              'TensorFlow', 'PyTorch', 'Flask', 'Django', 'Express.js', 'Postman'
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-600 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;