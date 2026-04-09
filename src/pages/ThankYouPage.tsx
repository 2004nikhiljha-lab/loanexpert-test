import React from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

const ThankYouPage: React.FC = () => {
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

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              {/* Success Icon */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>

              {/* Success Message */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Application Submitted Successfully!</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Thank you for choosing Loan Expert! Your loan application has been received and is being processed by our expert team.
              </p>

              {/* Application Details Card */}
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 mb-12 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-slate-800">What Happens Next?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Phone Verification</h3>
                    <p className="text-slate-600 text-sm">Our team will call you within 2-4 hours to verify your details</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Document Collection</h3>
                    <p className="text-slate-600 text-sm">You'll receive an email with required documents list</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Loan Approval</h3>
                    <p className="text-slate-600 text-sm">Get approval within 24-48 hours after verification</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-200 mb-12 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-blue-800">Application Timeline</h2>
                <div className="space-y-4">
                  {[
                    { time: 'Within 2 hours', status: 'completed', desc: 'Application received and acknowledged' },
                    { time: '2-4 hours', status: 'current', desc: 'Phone verification call' },
                    { time: '4-8 hours', status: 'pending', desc: 'Document verification process' },
                    { time: '24-48 hours', status: 'pending', desc: 'Final loan approval and disbursement' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'current' ? 'bg-blue-500 animate-pulse' :
                        'bg-slate-300'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-slate-800">{item.time}</span>
                          {item.status === 'completed' && (
                            <span className="text-green-600 text-sm font-medium">Completed</span>
                          )}
                          {item.status === 'current' && (
                            <span className="text-blue-600 text-sm font-medium">In Progress</span>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-200 mb-12 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-green-800">Need Help?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Call Us</h3>
                    <p className="text-slate-600 mb-2">+91-9810454531</p>
                    <p className="text-slate-500 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Email Us</h3>
                    <p className="text-slate-600 mb-2">support@loanexpert.com</p>
                    <p className="text-slate-500 text-sm">24/7 Email Support</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  Back to Home
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  Explore More Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Logo size="large" />
              <p className="text-slate-300 mt-4 leading-relaxed">Your trusted partner for all loan needs with competitive rates and quick approval.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link to="/services" className="hover:text-white transition-colors">Retail Loans</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Government Schemes</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Corporate Loans</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-9810454531</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Projectfinancer@yahoo.co.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-4 w-4">📍</span>
                  <span>Faridabad, Haryana</span>
                </div>
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

export default ThankYouPage;
