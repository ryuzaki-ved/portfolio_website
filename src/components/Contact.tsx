import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com'
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
          <div className="magical-card bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300" data-stagger>
            <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg btn-hover flex items-center justify-center gap-2 transition-all duration-300 text-sm"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
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