import React from 'react';
import { ArrowRight, Home as HomeIcon, Building, Car, GraduationCap, TrendingUp, Settings, Briefcase, Users, Shield, DollarSign, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import AIAssistant from '../components/AIAssistant';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'Retail Loans',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      items: [
        { icon: HomeIcon, title: 'Home Loans', desc: 'Home loan is a secured loan facility, which banks and HFCs offer to finance purchase of a property with attractive interest rates and long tenure.', features: ['Up to 90% funding', '30-year tenure', 'Tax benefits'] },
        { icon: Building, title: 'Loan Against Property', desc: 'Unlock property value for financial needs with competitive interest rates and flexible repayment options.', features: ['High LTV ratio', 'Quick processing', 'Minimal documentation'] },
        { icon: Car, title: 'Car Loan', desc: 'Drive your dream car with easy EMIs and flexible repayment options tailored to your budget.', features: ['Up to 100% funding', 'Competitive rates', 'Quick approval'] },
        { icon: GraduationCap, title: 'Education Loan', desc: 'Invest in your future with education loans for domestic and international studies with tax benefits.', features: ['Study abroad support', 'Tax benefits', 'Flexible repayment'] }
      ]
    },
    {
      category: 'Government Schemes',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      items: [
        { icon: Building, title: 'Mudra Loans', desc: 'PM MUDRA YOJNA (PMMY) is a Government of India initiative to fund micro-enterprises and promote entrepreneurship.', features: ['Collateral-free', 'Low interest rates', 'Quick processing'] },
        { icon: Users, title: 'PMEGP Loan Scheme', desc: 'Prime Minister\'s Employment Generation Programme aimed at creating employment opportunities through self-employment.', features: ['Subsidy available', 'Training support', 'Market assistance'] },
        { icon: Shield, title: 'CGTMSE Loan', desc: 'Credit Guarantee Funds Trust for Micro and Small Enterprises provides collateral-free loans with government guarantee.', features: ['No collateral required', 'Government guarantee', 'Easy terms'] },
        { icon: TrendingUp, title: 'Standup India Scheme', desc: 'Government scheme launched in 2016 to promote entrepreneurship among SC/ST and women entrepreneurs.', features: ['Special focus groups', 'Lower interest rates', 'Handholding support'] }
      ]
    },
    {
      category: 'Corporate Loans',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      items: [
        { icon: Settings, title: 'Machinery Loan', desc: 'Business loan specifically designed to help businesses purchase or upgrade machinery and equipment.', features: ['Asset financing', 'Tax benefits', 'Flexible tenure'] },
        { icon: DollarSign, title: 'Working Capital', desc: 'Credit facility offered to startups and business owners for daily operational needs and cash flow management.', features: ['Overdraft facility', 'Interest on usage', 'Quick renewal'] },
        { icon: Briefcase, title: 'Business Loan', desc: 'Flexible funding solutions for growing businesses with competitive interest rates and customized terms.', features: ['Customized solutions', 'Business expansion', 'Growth support'] },
        { icon: Building, title: 'Project Finance', desc: 'New Project Finance Loan from government banks for infrastructure and development projects.', features: ['Long-term funding', 'Project monitoring', 'Expert guidance'] }
      ]
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
              <Link to="/services" className="text-blue-600 font-medium">Services</Link>
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
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Services</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive loan solutions tailored to meet your diverse financial needs with competitive rates and quick approval
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#retail" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">Retail Loans</a>
              <a href="#government" className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">Government Schemes</a>
              <a href="#corporate" className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">Corporate Loans</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} id={category.category.toLowerCase().replace(' ', '-')} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className={`h-1 w-32 bg-gradient-to-r ${category.color} mx-auto rounded-full mb-6`}></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{category.category}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {category.category === 'Retail Loans' && 'Personal and family loan solutions with flexible terms and competitive interest rates'}
                {category.category === 'Government Schemes' && 'Government-backed loan schemes with special benefits and subsidies for eligible candidates'}
                {category.category === 'Corporate Loans' && 'Business financing solutions for growth, expansion, and operational needs'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.items.map((service, serviceIndex) => (
                <div key={serviceIndex} className="group">
                  <div className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border ${category.borderColor} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full"></div>
                    <div className={`bg-gradient-to-r ${category.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/apply" className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group`}>
                      <span>Apply Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Apply now and get your loan approved with our quick and hassle-free process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                Talk to Expert
                <Phone className="ml-2 h-5 w-5" />
              </Link>
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
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Expertise</button></li>
                <li><button className="hover:text-white transition-colors bg-transparent border-none cursor-pointer">Become a Partner</button></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#retail" className="hover:text-white transition-colors">Retail Loans</a></li>
                <li><a href="#government" className="hover:text-white transition-colors">Government Schemes</a></li>
                <li><a href="#corporate" className="hover:text-white transition-colors">Corporate Loans</a></li>
                <li><a href="#retail" className="hover:text-white transition-colors">Home Loans</a></li>
                <li><a href="#corporate" className="hover:text-white transition-colors">Business Loans</a></li>
                <li><a href="#retail" className="hover:text-white transition-colors">Education Loans</a></li>
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

export default ServicesPage;
