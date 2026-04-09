import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, DollarSign, Shield, Users, ArrowRight, Home as HomeIcon, Building, Car, GraduationCap, TrendingUp, Settings, Briefcase } from 'lucide-react';

interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  loanAmount: string;
  loanType: string;
  message: string;
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryForm>({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    loanType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store enquiry in localStorage (in a real app, this would go to a backend)
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">Loan Expert</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
              <a href="/admin/login" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">Admin</a>
            </nav>
            <button className="md:hidden text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 animate-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-textReveal">
                Get Your Loan Approved Fast
              </h2>
              <p className="text-xl mb-8 text-primary-100 animate-textReveal animate-delay-200">
                Professional loan consultation services with competitive rates and quick approval process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#enquiry" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition inline-flex items-center justify-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hidden md:block animate-slideInRight">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Quick Approval Process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Competitive Interest Rates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Expert Financial Guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Flexible Repayment Options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-gray-400">Home</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="text-primary-600">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-textReveal">Our Services</h2>
            <p className="text-xl text-gray-600 animate-textReveal animate-delay-200">What We Offer for You</p>
          </div>

          {/* Retail Loans */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center animate-textReveal">Retail Loans</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group animate-cardEntrance animate-delay-100">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <HomeIcon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Home Loans</h4>
                <p className="text-gray-600 mb-4 text-sm">Home loan is a secured loan facility, which banks and HFCs offer to finance the purchase of a property.</p>
                <button className="text-primary-600 font-semibold flex items-center space-x-1 hover:text-primary-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <Building className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Loan Against Property</h4>
                <p className="text-gray-600 mb-4 text-sm">Unlock property value for financial needs with competitive interest rates.</p>
                <button className="text-primary-600 font-semibold flex items-center space-x-1 hover:text-primary-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <Car className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Car Loan</h4>
                <p className="text-gray-600 mb-4 text-sm">Drive your dream car with easy EMIs and flexible repayment options.</p>
                <button className="text-primary-600 font-semibold flex items-center space-x-1 hover:text-primary-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <GraduationCap className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Education Loan</h4>
                <p className="text-gray-600 mb-4 text-sm">Invest in your future with education loans for domestic and international studies.</p>
                <button className="text-primary-600 font-semibold flex items-center space-x-1 hover:text-primary-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Government Schemes */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Powerful Government Schemes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Building className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Mudra Loans</h4>
                <p className="text-gray-600 mb-4 text-sm">PM MUDRA YOJNA (PMMY) is a Government of India initiative to fund micro-enterprises.</p>
                <button className="text-green-600 font-semibold flex items-center space-x-1 hover:text-green-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Users className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">PMEGP Loan Scheme</h4>
                <p className="text-gray-600 mb-4 text-sm">Prime Minister's Employment Generation Programme aimed at creating employment opportunities.</p>
                <button className="text-green-600 font-semibold flex items-center space-x-1 hover:text-green-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Shield className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">CGTMSE Loan</h4>
                <p className="text-gray-600 mb-4 text-sm">Credit Guarantee Funds Trust for Micro and Small Enterprises provides collateral-free loans.</p>
                <button className="text-green-600 font-semibold flex items-center space-x-1 hover:text-green-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <TrendingUp className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Standup India Scheme</h4>
                <p className="text-gray-600 mb-4 text-sm">Government scheme launched in 2016 to promote entrepreneurship among SC/ST and women.</p>
                <button className="text-green-600 font-semibold flex items-center space-x-1 hover:text-green-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Corporate Loans */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Corporate Loans</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Settings className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Machinery Loan</h4>
                <p className="text-gray-600 mb-4 text-sm">Business loan specifically designed to help businesses purchase or upgrade machinery.</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <DollarSign className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Working Capital</h4>
                <p className="text-gray-600 mb-4 text-sm">Credit facility offered to startups and business owners for daily operational needs.</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Briefcase className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Business Loan</h4>
                <p className="text-gray-600 mb-4 text-sm">Flexible funding solutions for growing businesses with competitive interest rates.</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Building className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-3">Project Finance</h4>
                <p className="text-gray-600 mb-4 text-sm">New Project Finance Loan from government banks for infrastructure and development projects.</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">We can give best facilities for business</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">2200 Cr+</div>
              <p className="text-gray-600">Credit Facilitated Turnover</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">18 / 25</div>
              <p className="text-gray-600">States Covered</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">97%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">20+ Years</div>
              <p className="text-gray-600">Experience</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary-50 transition-colors duration-300 group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                <Users className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team of EX-Govt. Bankers & Professionals</h3>
              <p className="text-gray-600 text-sm">Expert guidance from experienced banking professionals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary-50 transition-colors duration-300 group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                <Building className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">All Government Banks</h3>
              <p className="text-gray-600 text-sm">Access to all major government banking institutions</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary-50 transition-colors duration-300 group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                <MapPin className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pan India Service</h3>
              <p className="text-gray-600 text-sm">Serving customers across all states in India</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary-50 transition-colors duration-300 group">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                <Clock className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
              <p className="text-gray-600 text-sm">Quick processing with reliable service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Loan Expert</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Loan Experts is committed to provide the world class financial services among its customers. We are serving our renowned associate Bankers and valuable customers for last 15 years. We always collaborate with reputed & trust worthy Banks and financial Institutions to consistently ensure hassle-free consumer experience.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-600">To provide exceptional financial services that help our customers achieve their dreams and grow their businesses.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-gray-600">To become the most trusted financial services provider in India by delivering excellence in every interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply for a Loan</h2>
              <p className="text-xl text-gray-600">Fill in your details and we'll get back to you soon</p>
            </div>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your enquiry! We will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Loan Amount *</label>
                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="₹10,00,000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Loan Type *</label>
                <select
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select Loan Type</option>
                  <option value="personal">Personal Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="education">Education Loan</option>
                  <option value="car">Car Loan</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us more about your loan requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you with all your loan needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">+91 98765 43211</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@loanexpert.com</p>
              <p className="text-gray-600">support@loanexpert.com</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Finance Street</p>
              <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="h-8 w-8 text-primary-400" />
                <h3 className="text-xl font-bold">Loan Expert</h3>
              </div>
              <p className="text-gray-400 mb-4">Your trusted partner for all loan needs with competitive rates and quick approval.</p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1">
                  <Users className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
                <li><button className="hover:text-white transition bg-transparent border-none cursor-pointer">Expertise</button></li>
                <li><button className="hover:text-white transition bg-transparent border-none cursor-pointer">Become a Partner</button></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Retail Loans</a></li>
                <li><a href="#services" className="hover:text-white transition">Government Schemes</a></li>
                <li><a href="#services" className="hover:text-white transition">Corporate Loans</a></li>
                <li><a href="#services" className="hover:text-white transition">Home Loans</a></li>
                <li><a href="#services" className="hover:text-white transition">Business Loans</a></li>
                <li><a href="#services" className="hover:text-white transition">Education Loans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <h5 className="font-semibold text-white mb-2">Corporate Office</h5>
                  <p className="text-sm">SCO-9, 2nd Floor, Krishna Palace,<br />Ajronda Chowk, Faridabad - 121001</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:Projectfinancer@yahoo.co.in" className="hover:text-white transition">Projectfinancer@yahoo.co.in</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+91-9810454531" className="hover:text-white transition">+91-9810454531</a>
                </div>
                <div className="pt-2 border-t border-gray-800">
                  <p className="text-xs">Business Hours:<br />Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2024 Reserved By Loan Expert India. Powered By Fixdot Technologies.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="hover:text-white transition bg-transparent border-none cursor-pointer">Privacy Policy</button>
                <button className="hover:text-white transition bg-transparent border-none cursor-pointer">Terms of Service</button>
                <button className="hover:text-white transition bg-transparent border-none cursor-pointer">Disclaimer</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
