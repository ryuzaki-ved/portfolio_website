import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSendMessage = () => {
    const recipientEmail = 'dindorevedant28@email.com';
    window.location.href = `mailto:${recipientEmail}`;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'dindorevedant28@email.com',
      link: 'mailto:dindorevedant28@email.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 88058-32334',
      link: 'tel:+918805832334',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      link: 'https://www.google.com/maps/place/Pune,+Maharashtra/@18.5245986,73.780566,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5246091!4d73.8786239!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com/ryuzaki-ved'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vedant-dindore'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 scroll-mt-16 relative overflow-hidden">
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
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${info.color} mb-3 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{info.title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-cyan-400 transition-colors">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Ready to Connect?</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm shadow-lg shadow-cyan-500/25"
            >
              <Send size={18} />
              Send Message
            </motion.button>
            <p className="text-gray-400 text-xs mt-4">
              Click to open your email client
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-4 mt-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-md bg-gray-700 text-white group-hover:bg-cyan-500 transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{social.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;