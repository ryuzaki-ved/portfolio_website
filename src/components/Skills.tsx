import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Brain, Database, BarChart, Terminal, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Cluster Data for Background Clouds
  const clusters = [
    { id: 'ai', label: 'AI & Machine Learning', x: 30, y: 25, color: '#a855f7', size: 40 },
    { id: 'data', label: 'Data Science & Analytics', x: 20, y: 80, color: '#10b981', size: 40 },
    { id: 'web', label: 'Web & Visualization', x: 85, y: 25, color: '#06b6d4', size: 40 },
    { id: 'backend', label: 'Backend & Infrastructure', x: 80, y: 80, color: '#f59e0b', size: 40 },
  ];

  // Node Data: Positions are in percentages (0-100)
  const nodes = [
    // Center Hub
    { id: 'python', label: 'Python', x: 50, y: 50, type: 'core', color: '#3b82f6' },
    
    // Data Analysis (Bottom Left Cluster)
    { id: 'pandas', label: 'Pandas', x: 30, y: 65, type: 'data', color: '#10b981' },
    { id: 'numpy', label: 'NumPy', x: 20, y: 72, type: 'data', color: '#3b82f6' },
    { id: 'matplotlib', label: 'Matplotlib', x: 10, y: 80, type: 'data', color: '#115e59' },
    { id: 'seaborn', label: 'Seaborn', x: 22, y: 90, type: 'data', color: '#0ea5e9' },
    { id: 'excel', label: 'Excel', x: 35, y: 82, type: 'tool', color: '#16a34a' },

    // Machine Learning & AI (Top Left Cluster - Shifted Right for Panel)
    { id: 'scikit', label: 'Scikit-learn', x: 35, y: 35, type: 'ai', color: '#f97316' },
    { id: 'tf', label: 'TensorFlow', x: 28, y: 22, type: 'ai', color: '#a855f7' },
    { id: 'pytorch', label: 'PyTorch', x: 20, y: 35, type: 'ai', color: '#ef4444' },
    { id: 'xgboost', label: 'XGBoost', x: 25, y: 15, type: 'ai', color: '#ea580c' },
    { id: 'llm', label: 'LLMs', x: 40, y: 15, type: 'ai', color: '#8b5cf6' },
    { id: 'rag', label: 'RAG', x: 35, y: 8, type: 'ai', color: '#6366f1' },
    { id: 'stat', label: 'Stat Modeling', x: 15, y: 50, type: 'ai', color: '#64748b' },

    // Web & Visualization (Top Right Cluster)
    { id: 'react', label: 'React', x: 80, y: 30, type: 'web', color: '#06b6d4' },
    { id: 'next', label: 'Next.js', x: 90, y: 18, type: 'web', color: '#ffffff' },
    { id: 'tailwind', label: 'Tailwind', x: 95, y: 32, type: 'web', color: '#38bdf8' },
    { id: 'plotly', label: 'Plotly', x: 70, y: 20, type: 'viz', color: '#818cf8' },
    { id: 'powerbi', label: 'Power BI', x: 85, y: 10, type: 'viz', color: '#f59e0b' },

    // Backend, DB & Tools (Bottom Right Cluster)
    { id: 'sql', label: 'SQL', x: 60, y: 65, type: 'db', color: '#f59e0b' },
    { id: 'postgres', label: 'PostgreSQL', x: 70, y: 75, type: 'db', color: '#336791' },
    { id: 'mysql', label: 'MySQL', x: 80, y: 65, type: 'db', color: '#00758f' },
    { id: 'mongo', label: 'MongoDB', x: 90, y: 80, type: 'db', color: '#47a248' },
    { id: 'duckdb', label: 'DuckDB', x: 70, y: 90, type: 'db', color: '#fff000' },
    { id: 'pyspark', label: 'PySpark', x: 55, y: 80, type: 'data', color: '#e25a1c' },
    { id: 'docker', label: 'Docker', x: 95, y: 55, type: 'tool', color: '#0ea5e9' },
    { id: 'git', label: 'Git', x: 50, y: 30, type: 'tool', color: '#f05032' },
    { id: 'jupyter', label: 'Jupyter', x: 45, y: 70, type: 'tool', color: '#f37626' },
  ];

  // Connections (Adjacency List)
  const connections = [
    // Python Hub
    ['python', 'pandas'], ['python', 'numpy'], ['python', 'scikit'], ['python', 'tf'], 
    ['python', 'pytorch'], ['python', 'sql'], ['python', 'jupyter'], ['python', 'pyspark'],
    ['python', 'git'], ['python', 'plotly'],

    // Data Cluster
    ['pandas', 'numpy'], ['pandas', 'matplotlib'], ['pandas', 'seaborn'], ['pandas', 'excel'],
    ['pandas', 'duckdb'], ['numpy', 'scikit'], ['numpy', 'stat'],
    ['matplotlib', 'seaborn'], ['matplotlib', 'plotly'],

    // AI Cluster
    ['scikit', 'xgboost'], ['scikit', 'stat'], ['tf', 'pytorch'], ['tf', 'llm'],
    ['pytorch', 'llm'], ['llm', 'rag'], ['xgboost', 'stat'],

    // Web Cluster
    ['react', 'next'], ['react', 'tailwind'], ['react', 'plotly'],
    
    // DB & Tools
    ['sql', 'postgres'], ['sql', 'mysql'], ['sql', 'duckdb'], ['sql', 'mongo'],
    ['sql', 'powerbi'], ['powerbi', 'excel'],
    ['pyspark', 'sql'], ['pyspark', 'pandas'],
    ['git', 'react'], ['git', 'python'], ['docker', 'postgres'], ['docker', 'mongo']
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <Network className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Neural Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Synapses</span>
          </h2>
        </motion.div>

        {/* Neural Network Container */}
        <div className="relative w-full max-w-6xl min-h-[600px] rounded-3xl group perspective-1000">
          
          {/* Technical UI Overlays */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30 rounded-br-lg" />
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
          </div>

          {/* Status Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4 z-20 hidden md:block"
          >
            <div className="p-4 rounded-lg border border-cyan-500/20 bg-black/40 backdrop-blur-md font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-cyan-400 font-bold tracking-wider">SYSTEM STATUS: ONLINE</span>
              </div>
              <div className="space-y-2 text-white/60">
                <div className="flex justify-between gap-8">
                  <span>ACTIVE NODES</span>
                  <span className="text-white font-bold">27</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>SYNAPSES</span>
                  <span className="text-white font-bold">42</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>TRAINING ACCURACY</span>
                  <span className="text-green-400 font-bold">99.8%</span>
                </div>
                <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-cyan-500/70">
                  ID: RYZ-8842-X
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background Clusters - Cloud Effect */}
          {clusters.map((cluster, i) => (
            <div
              key={cluster.id}
              className="absolute pointer-events-none"
              style={{
                left: `${cluster.x}%`,
                top: `${cluster.y}%`,
                transform: 'translate(-50%, -50%)',
                width: `${cluster.size}%`,
                height: `${cluster.size}%`,
              }}
            >
              {/* Main Cloud Blob (Blurred Background) */}
              <motion.div
                className="absolute inset-0 rounded-full blur-[60px] opacity-25"
                style={{ backgroundColor: cluster.color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Animated Irregular Cloud Border */}
              <motion.div
                className="absolute inset-0 border-2 opacity-50"
                style={{ 
                  borderColor: cluster.color,
                  boxShadow: `0 0 20px ${cluster.color}33, inset 0 0 20px ${cluster.color}11` 
                }}
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Inner Detail Line for Depth */}
              <motion.div
                className="absolute inset-4 border border-dashed opacity-30"
                style={{ borderColor: cluster.color }}
                animate={{
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 50% 60% 50%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "40% 60% 70% 30% / 40% 50% 60% 50%"
                  ],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          ))}

          {/* SVG Layer for Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="synapse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
              </linearGradient>
            </defs>
            {connections.map(([startId, endId], i) => {
              const start = nodes.find(n => n.id === startId);
              const end = nodes.find(n => n.id === endId);
              if (!start || !end) return null;

              const isActive = hoveredNode === startId || hoveredNode === endId;
              const isDimmed = hoveredNode && !isActive;

              return (
                <g key={`${startId}-${endId}`}>
                  {/* Base Connection Line - Always visible now */}
                  <motion.line
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke={isActive ? "url(#synapse-gradient)" : "rgba(255, 255, 255, 0.2)"}
                    strokeWidth={isActive ? 2 : 0.5}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isDimmed ? 0.1 : 0.5 }}
                    transition={{ duration: 1.5, delay: i * 0.02 }}
                    className="transition-all duration-300"
                  />

                  {/* Active Synapse Particle - Constant flow of data */}
                  {!isDimmed && (
                    <motion.circle
                      r={isActive ? 2 : 1}
                      fill={isActive ? "#fff" : start.color}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        cx: [`${start.x}%`, `${end.x}%`],
                        cy: [`${start.y}%`, `${end.y}%`],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: isActive ? 0.8 : 1.5 + Math.random(), 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: Math.random() * 2 
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Nodes Layer */}
          {nodes.map((node, i) => {
            const isHovered = hoveredNode === node.id;
            const isConnectedToHovered = hoveredNode && connections.some(c => (c[0] === hoveredNode && c[1] === node.id) || (c[1] === hoveredNode && c[0] === node.id));
            const isDimmed = hoveredNode && !isHovered && !isConnectedToHovered;

            return (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                animate={{ 
                  y: [0, -5, 0],
                  opacity: isDimmed ? 0.2 : 1,
                  scale: isHovered ? 1.2 : (isConnectedToHovered ? 1.1 : 1),
                  filter: isDimmed ? 'blur(1px)' : 'none'
                }}
                transition={{ 
                  y: { duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 },
                  default: { duration: 0.3, delay: i * 0.05 }
                }}
              >
                <div 
                  className={`
                    relative px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all duration-300 group/node
                    ${!isHovered ? 'bg-gray-900/80 border-white/10 hover:border-white/30' : ''}
                  `}
                  style={isHovered ? {
                    backgroundColor: `${node.color}22`,
                    borderColor: node.color,
                    boxShadow: `0 0 20px ${node.color}44, inset 0 0 10px ${node.color}22`
                  } : {
                    boxShadow: `0 0 10px ${node.color}05`
                  }}
                >
                  {/* Technical Corners on Hover */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/50" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/50" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/50" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/50" />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/70 whitespace-nowrap">
                        COORD: [{node.x}, {node.y}]
                      </div>
                    </>
                  )}
                  
                  <div className="flex items-center gap-2">
                    {node.type === 'core' && <Cpu size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'ai' && <Brain size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'web' && <Globe size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'data' && <BarChart size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'db' && <Database size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'tool' && <Terminal size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    {node.type === 'viz' && <Layers size={14} style={{ color: isHovered ? 'white' : node.color }} />}
                    
                    <span className={`text-xs font-bold tracking-wide font-mono ${isHovered ? 'text-white' : 'text-gray-300'}`}>
                      {node.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 font-mono">
            INTERACTIVE NEURAL MAP • HOVER TO ANALYZE CONNECTIONS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;