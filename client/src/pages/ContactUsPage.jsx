import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, Send, User, AtSign, Hash } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98202 33133",
      subtitle: "24/7 Available"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "support@sandnsearealty.com",
      subtitle: "We'll respond within 24 hours"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to find your dream coastal property? Our luxury real estate experts are here to guide you every step of the way. Let's start your journey to oceanfront living.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and one of our luxury property specialists will contact you within 24 hours.
                </p>
              </div>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-semibold">Thank you for your inquiry! We'll be in touch soon.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your dream property, budget range, preferred locations, or any specific requirements..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#d2ab67] text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-[#d2ab67] mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                    <p className="text-slate-700 font-semibold">{info.details}</p>
                    <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer to Call or Chat?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="tel:+919820233133 
" 
                    className="bg-[#d2ab67] text-white py-3 px-6 rounded-xl font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/919820233133 
" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  Available Monday-Saturday for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919820233133 
"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with us on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactUsPage;