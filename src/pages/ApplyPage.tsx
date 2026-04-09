import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, DollarSign, Building, Car, GraduationCap, TrendingUp, Settings, Briefcase, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

interface LoanApplication {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  panNumber: string;
  aadhaarNumber: string;
  currentAddress: string;
  permanentAddress: string;
  employmentType: string;
  companyName: string;
  monthlyIncome: string;
  workExperience: string;
  loanAmount: string;
  loanType: string;
  loanPurpose: string;
  existingLoans: string;
  collateralType: string;
  collateralValue: string;
  tenure: string;
  agreeTerms: boolean;
}

const ApplyPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<LoanApplication>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panNumber: '',
    aadhaarNumber: '',
    currentAddress: '',
    permanentAddress: '',
    employmentType: '',
    companyName: '',
    monthlyIncome: '',
    workExperience: '',
    loanAmount: '',
    loanType: '',
    loanPurpose: '',
    existingLoans: '',
    collateralType: '',
    collateralValue: '',
    tenure: '',
    agreeTerms: false
  });

  const loanTypes = [
    { id: 'home', name: 'Home Loan', icon: Building, desc: 'Purchase or construct your dream home', maxAmount: '5 Cr', interest: '8.5%' },
    { id: 'personal', name: 'Personal Loan', icon: DollarSign, desc: 'For personal financial needs', maxAmount: '50 Lakh', interest: '12%' },
    { id: 'car', name: 'Car Loan', icon: Car, desc: 'Buy your dream car', maxAmount: '1 Cr', interest: '9%' },
    { id: 'education', name: 'Education Loan', icon: GraduationCap, desc: 'For higher education', maxAmount: '1.5 Cr', interest: '10%' },
    { id: 'business', name: 'Business Loan', icon: Briefcase, desc: 'For business expansion', maxAmount: '10 Cr', interest: '11%' },
    { id: 'machinery', name: 'Machinery Loan', icon: Settings, desc: 'Purchase industrial equipment', maxAmount: '3 Cr', interest: '13%' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      navigate('/thank-you');
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Apply for a Loan</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Complete our simple application form and get approved within 24-48 hours
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-center items-center mb-12">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                      : 'bg-slate-300 text-slate-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-20 h-1 transition-all duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-slate-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Application Submitted Successfully!</h2>
                <p className="text-xl text-slate-600 mb-8">Thank you for applying. We'll contact you within 24 hours.</p>
                <div className="flex justify-center space-x-4">
                  <Link to="/" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Back to Home
                  </Link>
                  <Link to="/services" className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                    Explore More Services
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-200">
                    <h2 className="text-2xl font-bold mb-8 text-blue-800">Personal Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter your full name"
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
                          placeholder="your.email@example.com"
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
                        <label className="block text-slate-700 font-semibold mb-3">Date of Birth *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">PAN Number *</label>
                        <input
                          type="text"
                          name="panNumber"
                          value={formData.panNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Aadhaar Number *</label>
                        <input
                          type="text"
                          name="aadhaarNumber"
                          value={formData.aadhaarNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          placeholder="1234 5678 9012"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-slate-700 font-semibold mb-3">Current Address *</label>
                        <textarea
                          name="currentAddress"
                          value={formData.currentAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter your current address"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-slate-700 font-semibold mb-3">Permanent Address *</label>
                        <textarea
                          name="permanentAddress"
                          value={formData.permanentAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter your permanent address"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Employment Information */}
                {currentStep === 2 && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl border border-green-200">
                    <h2 className="text-2xl font-bold mb-8 text-green-800">Employment Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Employment Type *</label>
                        <select
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                        >
                          <option value="">Select Employment Type</option>
                          <option value="salaried">Salaried</option>
                          <option value="self-employed">Self Employed</option>
                          <option value="business">Business Owner</option>
                          <option value="professional">Professional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Company Name *</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Monthly Income (₹) *</label>
                        <input
                          type="text"
                          name="monthlyIncome"
                          value={formData.monthlyIncome}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                          placeholder="50,000"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Work Experience *</label>
                        <select
                          name="workExperience"
                          value={formData.workExperience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300"
                        >
                          <option value="">Select Experience</option>
                          <option value="0-1">Less than 1 year</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">More than 10 years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Loan Details */}
                {currentStep === 3 && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-200">
                    <h2 className="text-2xl font-bold mb-8 text-purple-800">Loan Details</h2>
                    
                    {/* Loan Type Selection */}
                    <div className="mb-8">
                      <label className="block text-slate-700 font-semibold mb-4">Select Loan Type *</label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {loanTypes.map((loan) => (
                          <div
                            key={loan.id}
                            className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.loanType === loan.id
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-slate-300 hover:border-purple-300'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, loanType: loan.id }))}
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                                <loan.icon className="h-6 w-6 text-white" />
                              </div>
                              <h3 className="font-bold text-slate-800">{loan.name}</h3>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">{loan.desc}</p>
                            <div className="flex justify-between text-sm">
                              <span className="font-semibold">Max: {loan.maxAmount}</span>
                              <span className="font-semibold text-green-600">{loan.interest}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Loan Amount (₹) *</label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                          placeholder="10,00,000"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Loan Purpose *</label>
                        <select
                          name="loanPurpose"
                          value={formData.loanPurpose}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select Purpose</option>
                          <option value="home-purchase">Home Purchase</option>
                          <option value="home-construction">Home Construction</option>
                          <option value="business-expansion">Business Expansion</option>
                          <option value="education">Education</option>
                          <option value="personal">Personal Needs</option>
                          <option value="debt-consolidation">Debt Consolidation</option>
                          <option value="medical">Medical Emergency</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Existing Loans</label>
                        <select
                          name="existingLoans"
                          value={formData.existingLoans}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select Option</option>
                          <option value="none">No Existing Loans</option>
                          <option value="1-2">1-2 Existing Loans</option>
                          <option value="3-5">3-5 Existing Loans</option>
                          <option value="5+">More than 5 Loans</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Preferred Tenure *</label>
                        <select
                          name="tenure"
                          value={formData.tenure}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300"
                        >
                          <option value="">Select Tenure</option>
                          <option value="1">1 Year</option>
                          <option value="3">3 Years</option>
                          <option value="5">5 Years</option>
                          <option value="7">7 Years</option>
                          <option value="10">10 Years</option>
                          <option value="15">15 Years</option>
                          <option value="20">20 Years</option>
                          <option value="25">25 Years</option>
                          <option value="30">30 Years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Collateral & Terms */}
                {currentStep === 4 && (
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl border border-orange-200">
                    <h2 className="text-2xl font-bold mb-8 text-orange-800">Collateral & Terms</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Collateral Type</label>
                        <select
                          name="collateralType"
                          value={formData.collateralType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                        >
                          <option value="">Select Collateral Type</option>
                          <option value="property">Property</option>
                          <option value="vehicle">Vehicle</option>
                          <option value="gold">Gold</option>
                          <option value="fixed-deposit">Fixed Deposit</option>
                          <option value="none">No Collateral</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-slate-700 font-semibold mb-3">Collateral Value (₹)</label>
                        <input
                          type="text"
                          name="collateralValue"
                          value={formData.collateralValue}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                          placeholder="50,00,000"
                        />
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200">
                      <h3 className="text-lg font-bold mb-4 text-slate-800">Terms & Conditions</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600">I declare that all information provided is true and correct</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600">I authorize Loan Expert to verify my information</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600">I agree to receive communication regarding my application</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleInputChange}
                          required
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label className="text-slate-700 font-medium">
                          I agree to the Terms & Conditions and Privacy Policy *
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-5 w-5 inline" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!formData.agreeTerms}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Application
                      <Shield className="ml-2 h-5 w-5 inline" />
                    </button>
                  )}
                </div>
              </form>
            )}
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
                  <MapPin className="h-4 w-4" />
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

export default ApplyPage;
