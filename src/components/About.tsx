import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Trophy, Zap, Users, Scan } from 'lucide-react';

const About = () => {
  // Radar Chart Data
  const stats = [
    { label: 'Full Stack', value: 100, fullMark: 100, icon: Code, color: '#22d3ee' },
    { label: 'Data Eng', value: 85, fullMark: 100, icon: Database, color: '#a855f7' },
    { label: 'ML / AI', value: 90, fullMark: 100, icon: Brain, color: '#10b981' },
    { label: 'Problem Solving', value: 95, fullMark: 100, icon: Trophy, color: '#f59e0b' },
    { label: 'Innovation', value: 92, fullMark: 100, icon: Zap, color: '#f43f5e' },
    { label: 'Collaboration', value: 88, fullMark: 100, icon: Users, color: '#6366f1' },
  ];

  // Helper to calculate polygon points
  const getPoint = (index: number, total: number, radius: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const radius = 120;
  const points = stats.map((stat, i) => {
    const { x, y } = getPoint(i, stats.length, radius * (stat.value / 100));
    return `${x},${y}`;
  }).join(' ');

  const bgPoints = stats.map((_, i) => {
    const { x, y } = getPoint(i, stats.length, radius);
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Holographic Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block"></div>
            
            <div className="mb-8 flex items-center gap-3">
              <Scan className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-sm font-mono text-cyan-400 tracking-[0.2em]">IDENTITY_VERIFIED</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Intelligent Systems
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p className="border-l-2 border-cyan-500/30 pl-6">
                Computer science graduate with hands-on experience in <span className="text-cyan-400 font-medium">full-stack development</span>, <span className="text-purple-400 font-medium">data engineering</span>, and <span className="text-emerald-400 font-medium">machine learning</span>.
                Completed three internships focused on building scalable solutions and delivering impactful technology projects.
              </p>
              <p className="border-l-2 border-purple-500/30 pl-6">
                Passionate about leveraging technology to solve real-world problems and continuously learning new skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">3+</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Internships</span>
              </div>
              <div className="w-px bg-gray-800 h-12"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Projects</span>
              </div>
              <div className="w-px bg-gray-800 h-12"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Commitment</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Radar Chart Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center py-10"
          >
            {/* Rotating Rings Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] border border-cyan-500/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="w-[300px] h-[300px] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>

            <div className="relative w-[320px] h-[320px]">
              <svg viewBox="-150 -150 300 300" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                {/* Background Hexagon */}
                <polygon points={bgPoints} fill="rgba(17, 24, 39, 0.5)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                
                {/* Inner Grid Lines */}
                {[0.25, 0.5, 0.75].map((scale, i) => (
                  <polygon 
                    key={i}
                    points={stats.map((_, idx) => {
                      const { x, y } = getPoint(idx, stats.length, radius * scale);
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="1"
                  />
                ))}

                {/* Axes */}
                {stats.map((_, i) => {
                  const { x, y } = getPoint(i, stats.length, radius);
                  return <line key={i} x1="0" y1="0" x2={x} y2={y} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />;
                })}

                {/* Data Polygon */}
                <motion.polygon
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  points={points}
                  fill="rgba(34, 211, 238, 0.2)"
                  stroke="#22d3ee"
                  strokeWidth="2"
                />

                {/* Data Points */}
                {stats.map((stat, i) => {
                  const { x, y } = getPoint(i, stats.length, radius * (stat.value / 100));
                  return (
                    <g key={i}>
                      <motion.circle
                        initial={{ r: 0 }}
                        whileInView={{ r: 4 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        cx={x}
                        cy={y}
                        fill={stat.color}
                        className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Labels */}
              {stats.map((stat, i) => {
                const { x, y } = getPoint(i, stats.length, radius + 40);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
                    style={{ 
                      left: `calc(50% + ${x}px)`, 
                      top: `calc(50% + ${y}px)` 
                    }}
                  >
                    <div className={`p-1.5 rounded-lg bg-gray-900/80 border border-gray-700 text-[${stat.color}] shadow-lg`}>
                      <stat.icon size={14} color={stat.color} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider whitespace-nowrap bg-black/50 px-1 rounded">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default About;