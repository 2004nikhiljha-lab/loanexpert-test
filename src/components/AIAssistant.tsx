import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2, Bot, User, Phone, Mail, MapPin, DollarSign, Building, Car, GraduationCap, TrendingUp, Settings, Briefcase, Shield, Clock, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  color: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: '👋 Hello! I\'m your Loan Expert AI assistant. I can help you with:\n\n• Loan eligibility\n• Interest rates\n• Application process\n• Document requirements\n• Repayment options\n\nHow can I assist you today?',
      sender: 'ai',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  const quickActions: QuickAction[] = [
    {
      id: '1',
      label: 'Check Eligibility',
      icon: CheckCircle,
      action: () => handleQuickAction('eligibility'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '2',
      label: 'Interest Rates',
      icon: TrendingUp,
      action: () => handleQuickAction('rates'),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: '3',
      label: 'Documents Needed',
      icon: Shield,
      action: () => handleQuickAction('documents'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '4',
      label: 'Apply Now',
      icon: Send,
      action: () => handleQuickAction('apply'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleQuickAction = (action: string) => {
    let response = '';
    
    switch (action) {
      case 'eligibility':
        response = '📋 **Basic Eligibility Criteria:**\n\n• Age: 21-60 years\n• Minimum income: ₹15,000/month\n• Credit score: 650+\n• Employment: 6+ months\n• Indian resident\n\n**For specific loans:**\n• **Home Loan**: Stable income, good credit\n• **Personal Loan**: Salaried individuals preferred\n• **Business Loan**: 2+ years in business\n• **Education Loan**: Admission proof required\n\nWould you like to check eligibility for a specific loan type?';
        break;
        
      case 'rates':
        response = '💰 **Current Interest Rates:**\n\n• **Home Loan**: 8.5% - 9.5% p.a.\n• **Personal Loan**: 12% - 18% p.a.\n• **Car Loan**: 9% - 12% p.a.\n• **Education Loan**: 10% - 13% p.a.\n• **Business Loan**: 11% - 16% p.a.\n• **Machinery Loan**: 13% - 15% p.a.\n\n**Government Schemes:**\n• **Mudra Loan**: 8% - 12% p.a.\n• **PMEGP**: Subsidized rates available\n• **CGTMSE**: No collateral required\n\nRates depend on your credit profile and loan amount. Would you like details for any specific loan?';
        break;
        
      case 'documents':
        response = '📄 **Required Documents:**\n\n**For All Loans:**\n• PAN Card\n• Aadhaar Card\n• Address Proof\n• Bank Statements (6 months)\n• Passport Photos\n\n**Additional Documents:**\n• **Home Loan**: Property papers, income tax returns\n• **Car Loan**: Quotation, insurance papers\n• **Education Loan**: Admission letter, fee structure\n• **Business Loan**: Business registration, financial statements\n\n**Government Schemes:**\n• Category certificate (SC/ST/OBC)\n• Business registration\n• Project report\n\nI can help you prepare a checklist for your specific loan type!';
        break;
        
      case 'apply':
        response = '🚀 **Ready to Apply?**\n\nI can guide you through the application process:\n\n**Step 1:** Gather all required documents\n**Step 2:** Check your CIBIL score\n**Step 3:** Compare loan options\n**Step 4:** Fill application form\n**Step 5:** Submit documents\n\n**Quick Tips:**\n• Maintain good credit score\n• Keep debt-to-income ratio < 40%\n• Have stable income proof\n• Choose appropriate tenure\n\nWould you like me to redirect you to the application form or help with any specific step?';
        break;
        
      default:
        response = 'I can help you with loan information and guidance. What would you like to know?';
    }

    addMessage(response, 'ai');
  };

  const addMessage = (text: string, sender: 'user' | 'ai') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      addMessage(aiResponse, 'ai');
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Common loan-related keywords and responses
    if (input.includes('eligibility') || input.includes('eligible')) {
      return 'Based on general criteria, you may be eligible if you:\n• Are 21-60 years old\n• Have stable income (₹15,000+/month)\n• Have good credit score (650+)\n• Are employed for 6+ months\n\nFor precise eligibility, I\'d need to know:\n• Your monthly income\n• Your employment type\n• Your current EMIs\n• Loan amount needed';
    }
    
    if (input.includes('interest') || input.includes('rate')) {
      return 'Interest rates vary by loan type:\n\n• Home Loan: 8.5-9.5% p.a.\n• Personal Loan: 12-18% p.a.\n• Car Loan: 9-12% p.a.\n• Business Loan: 11-16% p.a.\n\nYour actual rate depends on:\n• Credit score\n• Income level\n• Loan amount\n• Repayment tenure\n\nWould you like rates for a specific loan type?';
    }
    
    if (input.includes('document') || input.includes('paper')) {
      return 'Common documents required:\n\n**Mandatory:**\n• PAN Card\n• Aadhaar Card\n• Address proof\n• 6 months bank statements\n• Recent photos\n\n**Loan-specific:**\n• Home Loan: Property papers\n• Car Loan: Vehicle quotation\n• Education Loan: Admission letter\n• Business Loan: Business registration\n\nNeed help with document preparation?';
    }
    
    if (input.includes('emi') || input.includes('calculate')) {
      return 'EMI Calculation Formula:\n\nEMI = P × r × (1+r)^n / [(1+r)^n - 1]\n\nWhere:\n• P = Principal amount\n• r = Monthly interest rate\n• n = Loan tenure in months\n\n**Example:**\nFor ₹10,00,000 at 12% for 5 years:\nEMI ≈ ₹22,244/month\n\nI can help calculate EMI for your specific loan amount. Just provide:\n• Loan amount\n• Interest rate\n• Loan tenure';
    }
    
    if (input.includes('home loan') || input.includes('housing')) {
      return 'Home Loan Details:\n\n**Features:**\n• Amount: Up to ₹5 Crore\n• Tenure: Up to 30 years\n• Interest: 8.5-9.5% p.a.\n• Tax benefits under Section 24\n\n**Eligibility:**\n• Age: 21-60 years\n• Minimum income: ₹25,000/month\n• Credit score: 700+\n• 3+ years of employment\n\n**Documents:**\n• Property papers\n• Income proof\n• Bank statements\n• ID & address proof\n\nNeed specific home loan guidance?';
    }
    
    if (input.includes('personal loan')) {
      return 'Personal Loan Details:\n\n**Features:**\n• Amount: Up to ₹50 Lakh\n• Tenure: 1-7 years\n• Interest: 12-18% p.a.\n• No collateral required\n\n**Eligibility:**\n• Age: 21-58 years\n• Minimum income: ₹15,000/month\n• Credit score: 650+\n• Salaried individuals preferred\n\n**Best for:**\n• Medical emergencies\n• Wedding expenses\n• Debt consolidation\n• Travel funding\n\nNeed personal loan assistance?';
    }
    
    if (input.includes('business loan')) {
      return 'Business Loan Details:\n\n**Features:**\n• Amount: Up to ₹10 Crore\n• Tenure: 1-10 years\n• Interest: 11-16% p.a.\n• Flexible repayment options\n\n**Eligibility:**\n• Business: 2+ years old\n• Annual turnover: ₹20+ Lakh\n• Good credit history\n• Proper business registration\n\n**Types:**\n• Working capital loan\n• Machinery loan\n• Business expansion loan\n• Project finance\n\nNeed business loan guidance?';
    }
    
    if (input.includes('cibil') || input.includes('credit score')) {
      return 'CIBIL Score Guide:\n\n**Score Ranges:**\n• 750-900: Excellent\n• 700-749: Good\n• 650-699: Fair\n• 550-649: Poor\n• Below 550: Very Poor\n\n**Impact on Loans:**\n• 750+: Best rates, quick approval\n• 700-749: Good rates, standard process\n• 650-699: Higher rates, more documents\n• Below 650: May face rejection\n\n**Improvement Tips:**\n• Pay EMIs on time\n• Keep credit utilization < 30%\n• Don\'t apply for multiple loans\n• Check credit report regularly\n\nNeed help improving your score?';
    }
    
    if (input.includes('government') || input.includes('scheme')) {
      return 'Government Loan Schemes:\n\n**Popular Schemes:**\n\n1. **PM Mudra Yojana**\n• Shishu: Up to ₹50,000\n• Kishore: Up to ₹5 Lakh\n• Tarun: Up to ₹10 Lakh\n• Interest: 8-12% p.a.\n\n2. **PMEGP**\n• Subsidy available (25-35%)\n• For new enterprises\n• Margin money: 10-20%\n\n3. **Standup India**\n• For SC/ST & women entrepreneurs\n• Up to ₹1 Crore\n• Composite loan\n\n4. **CGTMSE**\n• Collateral-free loans\n• For micro/small enterprises\n• Government guarantee\n\n**Benefits:**\n• Lower interest rates\n• Subsidies available\n• Flexible terms\n• Government backing\n\nInterested in any specific scheme?';
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return 'Contact Loan Expert:\n\n**Phone:** +91-9810454531\n**Email:** Projectfinancer@yahoo.co.in\n**Office:** SCO-9, 2nd Floor, Krishna Palace, Ajronda Chowk, Faridabad - 121001\n\n**Business Hours:**\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 4:00 PM\n• Sunday: Closed\n\n**Response Time:**\n• Phone: Immediate during business hours\n• Email: Within 24 hours\n• Application: 24-48 hours\n\nNeed urgent assistance? Call now!';
    }
    
    if (input.includes('thank') || input.includes('help')) {
      return 'You\'re welcome! I\'m here to help with:\n\n🏠 **Loan Products**\n• Home, Personal, Car, Education, Business loans\n• Government schemes (Mudra, PMEGP, etc.)\n\n📋 **Application Process**\n• Eligibility checking\n• Document requirements\n• EMI calculations\n• Application guidance\n\n💡 **Expert Advice**\n• Interest rate comparisons\n• Credit score improvement\n• Repayment strategies\n• Loan optimization\n\nWhat specific aspect would you like help with?';
    }
    
    // Default response for unrecognized queries
    return `I understand you're asking about "${userInput}". I can help you with:\n\n📋 **Loan Information**\n• Eligibility criteria\n• Interest rates\n• Application process\n• Required documents\n\n🏠 **Loan Types**\n• Home, Personal, Car, Education\n• Business, Machinery loans\n• Government schemes\n\n💰 **Calculations**\n• EMI calculations\n• Interest comparisons\n• Tenure options\n\n📞 **Contact Support**\n• Phone: +91-9810454531\n• Email: Projectfinancer@yahoo.co.in\n\nCould you please specify what loan-related information you need?`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating AI Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40 group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-3xl border border-slate-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Loan Expert AI</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Quick Actions */}
              <div className="p-4 border-b border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className={`bg-gradient-to-r ${action.color} text-white p-3 rounded-xl flex items-center space-x-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <action.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-96 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-800 border border-slate-200'
                      }`}
                    >
                      {message.sender === 'ai' && (
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">AI Assistant</span>
                        </div>
                      )}
                      <div className="whitespace-pre-line text-sm leading-relaxed">{message.text}</div>
                      <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-800 border border-slate-200 px-4 py-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                        <span className="text-sm">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about loans, eligibility, rates..."
                    className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Quick Info */}
                <div className="mt-3 flex justify-between text-xs text-slate-500">
                  <span>🕐 Available 24/7</span>
                  <span>🔒 Your data is secure</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIAssistant;
