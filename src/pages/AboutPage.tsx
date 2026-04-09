import React from 'react';
import { Phone, Mail, MapPin, Clock, Users, Building, DollarSign, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

const AboutPage: React.FC = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', experience: '25+ years', expertise: 'Corporate Finance & Project Funding' },
    { name: 'Priya Sharma', role: 'Chief Operating Officer', experience: '20+ years', expertise: 'Retail Banking & Loan Processing' },
    { name: 'Amit Verma', role: 'Head of Operations', experience: '18+ years', expertise: 'Government Schemes & Policy Implementation' },
    { name: 'Sneha Patel', role: 'Senior Credit Manager', experience: '15+ years', expertise: 'Risk Assessment & Underwriting' }
  ];

  const achievements = [
    { number: '2200 Cr+', label: 'Credit Facilitated Turnover', icon: DollarSign, color: 'from-blue-600 to-indigo-600' },
    { number: '18 / 25', label: 'States Covered', icon: MapPin, color: 'from-green-600 to-emerald-600' },
    { number: '97%', label: 'Success Rate', icon: TrendingUp, color: 'from-purple-600 to-pink-600' },
    { number: '20+ Years', label: 'Industry Experience', icon: Clock, color: 'from-orange-600 to-red-600' },
    { number: '50+', label: 'Banking Partners', icon: Building, color: 'from-cyan-600 to-blue-600' },
    { number: '15,000+', label: 'Happy Customers', icon: Users, color: 'from-rose-600 to-pink-600' }
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
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
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
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">About Loan Expert</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for world-class financial services with 20+ years of excellence in loan consulting
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Content */}
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-200">
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Story</h2>
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  Loan Experts is committed to provide world class financial services among its customers. We are serving our renowned associate Bankers and valuable customers for last 15 years. We always collaborate with reputed & trust worthy Banks and financial Institutions to consistently ensure hassle-free consumer experience.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-2xl border border-blue-200">
                    <h3 className="text-xl font-bold mb-4 text-blue-800">Our Mission</h3>
                    <p className="text-slate-600 leading-relaxed">
                      To provide exceptional financial services that help our customers achieve their dreams and grow their businesses through innovative loan solutions and expert guidance.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-purple-200">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed">
                      To become the most trusted financial services provider in India by delivering excellence in every interaction and building lasting relationships with our customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-200">
                <h2 className="text-3xl font-bold mb-6 text-purple-800">Why Choose Us</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Expert Team', desc: 'Team of EX-Govt. Bankers & Professionals with 20+ years of experience', icon: Users },
                    { title: 'Wide Network', desc: 'All Government Banks and Financial Institutions under one roof', icon: Building },
                    { title: 'Quick Processing', desc: 'Fast & Reliable service with 97% success rate', icon: Clock },
                    { title: 'Customer First', desc: 'Hassle-free experience with transparent processes', icon: Shield }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl mt-1">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-10 rounded-3xl">
                <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Our Achievements</h2>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center group">
                      <div className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-800 mb-2">{achievement.number}</div>
                      <p className="text-sm text-slate-600">{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-200">
                <h2 className="text-3xl font-bold mb-6 text-green-800">Core Values</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Integrity', desc: 'Transparent and ethical business practices in all our dealings' },
                    { title: 'Excellence', desc: 'Committed to delivering the highest quality financial services' },
                    { title: 'Innovation', desc: 'Continuously improving our processes and adopting new technologies' },
                    { title: 'Customer Focus', desc: 'Putting our customers\' needs first in everything we do' }
                  ].map((value, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-slate-800 mb-2">{value.title}</h4>
                      <p className="text-slate-600 text-sm">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Expert Team</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals behind Loan Expert's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 text-center">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-center mb-3">{member.role}</p>
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                      {member.experience} Experience
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm text-center leading-relaxed">{member.expertise}</p>
                </div>
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
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who have transformed their dreams into reality with our expert financial guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                Talk to Expert
                <Phone className="ml-2 h-5 w-5" />
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
                  <Users className="h-5 w-5" />
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
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Expertise</button></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Become a Partner</button></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
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

export default AboutPage;
