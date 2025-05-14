import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: 'Winner, Options Algorithm Competition',
      organization: 'MRV Capital',
      year: '2023',
      description: 'Developed end-to-end quantitative trading algorithm with real-time data processing capabilities.',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  return (
    <section id="achievements" className="min-h-[50vh] flex items-center justify-center py-20 scroll-mt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Key <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming and algorithm development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                <div className={`flex-shrink-0 inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="font-semibold text-gray-300">{achievement.organization}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-yellow-500/80 font-mono">{achievement.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
