import React from 'react';
import { ArrowRight, DollarSign, Home as HomeIcon, Phone, Mail, MapPin, Clock, CheckCircle, Shield, Users, Building, Car, GraduationCap, TrendingUp, Settings, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  loanAmount: string;
  loanType: string;
  message: string;
}

const HomePage: React.FC = () => {
  const [formData, setFormData] = React.useState<EnquiryForm>({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    loanType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const enquiries = JSON.parse(localStorage.getItem('loanEnquiries') || '[]');
    const newEnquiry = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    enquiries.push(newEnquiry);
    localStorage.setItem('loanEnquiries', JSON.stringify(enquiries));
    
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      loanAmount: '',
      loanType: '',
      message: ''
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo size="medium" />
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">Home</Link>
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

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Get Your Loan</span>
                  <br />
                  <span className="text-slate-800">Approved Fast</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Professional loan consultation services with competitive rates and quick approval process.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group">
                  Apply Now 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Quick Approval Process</h3>
                      <p className="text-sm text-slate-600">Get approved in as little as 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Competitive Interest Rates</h3>
                      <p className="text-sm text-slate-600">Best rates in the market</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Expert Financial Guidance</h3>
                      <p className="text-sm text-slate-600">15+ years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">Flexible Repayment Options</h3>
                      <p className="text-sm text-slate-600">Customized payment plans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-slate-500">Home</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
              <span className="text-blue-600 font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Services</span>
            </h2>
            <p className="text-xl text-slate-600">What We Offer for You</p>
          </div>

          {/* Retail Loans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Retail Loans</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: HomeIcon, title: 'Home Loans', desc: 'Home loan is a secured loan facility, which banks and HFCs offer to finance purchase of a property.', color: 'from-blue-500 to-cyan-500' },
                { icon: Building, title: 'Loan Against Property', desc: 'Unlock property value for financial needs with competitive interest rates.', color: 'from-indigo-500 to-purple-500' },
                { icon: Car, title: 'Car Loan', desc: 'Drive your dream car with easy EMIs and flexible repayment options.', color: 'from-purple-500 to-pink-500' },
                { icon: GraduationCap, title: 'Education Loan', desc: 'Invest in your future with education loans for domestic and international studies.', color: 'from-pink-500 to-rose-500' }
              ].map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}></div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                    <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors group-hover:translate-x-1">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Schemes */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Powerful Government Schemes</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building, title: 'Mudra Loans', desc: 'PM MUDRA YOJNA (PMMY) is a Government of India initiative to fund micro-enterprises.', color: 'from-green-500 to-emerald-500' },
                { icon: Users, title: 'PMEGP Loan Scheme', desc: 'Prime Minister\'s Employment Generation Programme aimed at creating employment opportunities.', color: 'from-emerald-500 to-teal-500' },
                { icon: Shield, title: 'CGTMSE Loan', desc: 'Credit Guarantee Funds Trust for Micro and Small Enterprises provides collateral-free loans.', color: 'from-teal-500 to-cyan-500' },
                { icon: TrendingUp, title: 'Standup India Scheme', desc: 'Government scheme launched in 2016 to promote entrepreneurship among SC/ST and women.', color: 'from-cyan-500 to-blue-500' }
              ].map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}></div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-green-600 transition-colors">{service.title}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                    <button className="text-green-600 font-semibold flex items-center space-x-2 hover:text-green-700 transition-colors group-hover:translate-x-1">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Loans */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Corporate Loans</h3>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Settings, title: 'Machinery Loan', desc: 'Business loan specifically designed to help businesses purchase or upgrade machinery.', color: 'from-purple-500 to-indigo-500' },
                { icon: DollarSign, title: 'Working Capital', desc: 'Credit facility offered to startups and business owners for daily operational needs.', color: 'from-indigo-500 to-blue-500' },
                { icon: Briefcase, title: 'Business Loan', desc: 'Flexible funding solutions for growing businesses with competitive interest rates.', color: 'from-blue-500 to-cyan-500' },
                { icon: Building, title: 'Project Finance', desc: 'New Project Finance Loan from government banks for infrastructure and development projects.', color: 'from-cyan-500 to-teal-500' }
              ].map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}></div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-purple-600 transition-colors">{service.title}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                    <button className="text-purple-600 font-semibold flex items-center space-x-2 hover:text-purple-700 transition-colors group-hover:translate-x-1">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Why Choose Us?</span>
            </h2>
            <p className="text-xl text-slate-600">We can give best facilities for business</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: '2200 Cr+', label: 'Credit Facilitated Turnover', color: 'from-blue-600 to-indigo-600' },
              { value: '18 / 25', label: 'States Covered', color: 'from-green-600 to-emerald-600' },
              { value: '97%', label: 'Success Rate', color: 'from-purple-600 to-pink-600' },
              { value: '20+ Years', label: 'Experience', color: 'from-orange-600 to-red-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${stat.color} text-4xl md:text-5xl font-bold text-white mb-3 py-6 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Team of EX-Govt. Bankers & Professionals', desc: 'Expert guidance from experienced banking professionals', color: 'from-blue-500 to-indigo-500' },
              { icon: Building, title: 'All Government Banks', desc: 'Access to all major government banking institutions', color: 'from-indigo-500 to-purple-500' },
              { icon: MapPin, title: 'Pan India Service', desc: 'Serving customers across all states in India', color: 'from-purple-500 to-pink-500' },
              { icon: Clock, title: 'Fast & Reliable', desc: 'Quick processing with reliable service delivery', color: 'from-pink-500 to-rose-500' }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200">
                  <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">About Loan Expert</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">
              <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                Loan Experts is committed to provide world class financial services among its customers. We are serving our renowned associate Bankers and valuable customers for last 15 years. We always collaborate with reputed & trust worthy Banks and financial Institutions to consistently ensure hassle-free consumer experience.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">To provide exceptional financial services that help our customers achieve their dreams and grow their businesses.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-800">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">To become most trusted financial services provider in India by delivering excellence in every interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <p className="text-xl text-slate-600">We're here to help you with all your loan needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">Call Us</h3>
              <p className="text-slate-600 text-center mb-2">+91 98765 43210</p>
              <p className="text-slate-600 text-center">+91 98765 43211</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">Email Us</h3>
              <p className="text-slate-600 text-center mb-2">info@loanexpert.com</p>
              <p className="text-slate-600 text-center">support@loanexpert.com</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 text-center">Visit Us</h3>
              <p className="text-slate-600 text-center">123 Finance Street</p>
              <p className="text-slate-600 text-center">Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Apply for a Loan</span>
              </h2>
              <p className="text-xl text-slate-600">Fill in your details and we'll get back to you soon</p>
            </div>
            
            {isSubmitted && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl mb-8 text-center font-semibold shadow-lg">
                Thank you for your enquiry! We will contact you within 24 hours.
              </div>
            )}

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                    <label className="block text-slate-700 font-semibold mb-3">Loan Amount *</label>
                    <input
                      type="text"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                      placeholder="₹10,00,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Loan Type *</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select Loan Type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="education">Education Loan</option>
                    <option value="car">Car Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    placeholder="Tell us more about your loan requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
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
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Expertise</button></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Become a Partner</button></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#services" className="hover:text-white transition-colors">Retail Loans</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Government Schemes</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Corporate Loans</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Business Loans</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Education Loans</a></li>
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

export default HomePage;
