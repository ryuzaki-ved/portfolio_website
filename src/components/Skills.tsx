import { Code, Database, Brain, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
      color: 'from-purple-500 to-pink-600',
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/0 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Crafting innovative solutions with modern technologies
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated Corner Borders */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3 group/skill">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-150 transition-transform duration-300`}></div>
                      <span className="text-gray-400 text-sm group-hover/skill:text-gray-200 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Tools & Frameworks</h3>
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.15)', borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium cursor-default transition-all duration-300 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;