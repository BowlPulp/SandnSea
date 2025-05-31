import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, AtSign, Hash } from 'lucide-react';

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
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 9AM-7PM, Sat-Sun 10AM-5PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@sandnsearealty.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: "123 Ocean Drive, Suite 200",
      subtitle: "Coastal City, CA 90210"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Sunday",
      subtitle: "9:00 AM - 7:00 PM"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-gray-100">
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
                        placeholder="(555) 123-4567"
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
                    Message *
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
                  className="w-full bg-amber-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                />
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
                </div>
              </div>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center text-amber-600 mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{info.title}</h3>
                    <p className="text-slate-700 font-semibold">{info.details}</p>
                    <p className="text-gray-500 text-sm mt-1">{info.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-4 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Visit Our Office</h3>
                  <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Map placeholder with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-slate-100"></div>
                    <div className="relative z-10 text-center">
                      <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                      <p className="text-slate-700 font-semibold">Interactive Map</p>
                      <p className="text-gray-500 text-sm">123 Ocean Drive, Suite 200</p>
                      <p className="text-gray-500 text-sm">Coastal City, CA 90210</p>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 bg-amber-200/30 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <span>🅿️ Free Parking Available</span>
                    <span>🏢 2nd Floor, Suite 200</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Prefer to Call or Chat?</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="tel:+15551234567" 
                    className="bg-amber-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/15551234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  Available 7 days a week for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/15551234567"
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
    </>
  );
};

export default ContactUsPage;