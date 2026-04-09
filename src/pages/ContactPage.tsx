import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, DollarSign, ArrowRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Building,
      title: 'Corporate Office',
      details: [
        'SCO-9, 2nd Floor, Krishna Palace',
        'Ajronda Chowk, Faridabad - 121001',
        'Haryana, India'
      ],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91-9810454531 (Main)',
        '+91-98765 43210 (Support)',
        '+91-98765 43211 (Alternate)'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@loanexpert.com',
        'support@loanexpert.com',
        'Projectfinancer@yahoo.co.in'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-orange-600 to-red-600'
    }
  ];

  const faqs = [
    {
      question: 'What types of loans do you offer?',
      answer: 'We offer a comprehensive range of loans including Personal Loans, Home Loans, Business Loans, Education Loans, and various Government Schemes like Mudra Loans and PMEGP.'
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'Our streamlined approval process typically takes 24-48 hours for personal loans and 3-7 working days for business loans, depending on documentation completeness.'
    },
    {
      question: 'What documents are required for loan application?',
      answer: 'Basic documents include ID proof, address proof, income statements, bank statements, and property documents (for secured loans). Specific requirements vary by loan type.'
    },
    {
      question: 'Do you charge any processing fees?',
      answer: 'We are transparent about our fees. Processing fees vary by loan type and amount, typically ranging from 0.5% to 2% of the loan amount.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo size="medium" />
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
              <Link to="/services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
              <Link to="/admin/login" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-medium">Admin</Link>
            </nav>
            <button className="md:hidden text-slate-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're here to help you with all your loan needs. Reach out to us for expert guidance and quick solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Contact Information</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200`}>
                  <div className={`bg-gradient-to-r ${info.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800 text-center group-hover:text-blue-600 transition-colors">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600 text-center">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">Send us a Message</h2>
                
                {isSubmitted && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl mb-8 text-center font-semibold shadow-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Visit Our Office</h2>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 mb-6 border border-blue-200">
                <div className="text-center text-slate-600">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="font-semibold text-lg mb-2">Find Us Easily</p>
                  <p className="text-sm">SCO-9, 2nd Floor, Krishna Palace</p>
                  <p className="text-sm">Ajronda Chowk, Faridabad - 121001</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <h4 className="font-semibold mb-2">By Car</h4>
                  <p>Take NH-44 from Delhi, exit at Ajronda Chowk. Office is 500m from the exit.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Metro</h4>
                  <p>Nearest metro station is Faridabad Old (Line 1), 2km from office.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Parking Available</h4>
                  <p>Free parking available for all visitors and clients.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Working Hours</h4>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Q: {faq.question}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-semibold text-green-600">A:</span> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our expert team is ready to assist you with personalized financial solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+91-9810454531" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:info@loanexpert.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Loan Expert</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">Your trusted partner for all loan needs with competitive rates and quick approval.</p>
              <div className="flex space-x-4">
                <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2">
                  <Building className="h-5 w-5" />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Expertise</button></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Become a Partner</button></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="/services" className="hover:text-white transition-colors">Retail Loans</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Government Schemes</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Corporate Loans</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Business Loans</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Education Loans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h5 className="font-semibold text-white mb-2">Corporate Office</h5>
                  <p className="text-sm">SCO-9, 2nd Floor, Krishna Palace,<br />Ajronda Chowk, Faridabad - 121001</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:Projectfinancer@yahoo.co.in" className="hover:text-white transition-colors">Projectfinancer@yahoo.co.in</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+91-9810454531" className="hover:text-white transition-colors">+91-9810454531</a>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs">Business Hours:<br />Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
              <p>&copy; 2024 Reserved By Loan Expert India. Powered By Fixdot Technologies.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Privacy Policy</button>
                <button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Terms of Service</button>
                <button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Disclaimer</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default ContactPage;
