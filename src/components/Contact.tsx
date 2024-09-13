import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';

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
      url: 'www.linkedin.com/in/vedant-dindore'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: 'Discord',
      url: 'https://discord.com'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black py-20 scroll-mt-16" data-animation="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="magical-card group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden"
              data-stagger
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${info.color} mb-3 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{info.title}</h4>
                <p className="text-gray-400 text-sm">{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="magical-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col justify-center items-center" data-stagger>
            <h3 className="text-lg font-bold text-white mb-6 text-center">Ready to Connect?</h3>
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg btn-hover flex items-center justify-center gap-2 transition-all duration-300 text-sm shadow-lg hover:shadow-cyan-500/50"
            >
              <Send size={18} />
              Send Message
            </button>
            <p className="text-gray-400 text-xs mt-4 text-center">
              Click to open your email client
            </p>
          </div>

          <div className="magical-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 flex flex-col" data-stagger>
            <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              I'm actively seeking opportunities in software development, data science, and machine learning. Let's connect and explore how we can work together!
            </p>

            <div className="grid grid-cols-4 gap-3 mt-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-gray-400 transition-all duration-300 overflow-hidden flex items-center justify-center"
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-xs text-center">
                Available for full-time opportunities and freelance projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;