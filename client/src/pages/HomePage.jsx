import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, Users, Award, Phone, Mail, MapPin, Star, ChevronLeft, Facebook, Instagram, Twitter } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ properties: 0, clients: 0, years: 0 });

  // Testimonials data
  const testimonials = [
    {
      name: "Michael Thompson",
      role: "Luxury Home Buyer",
      text: "Sand N Sea Realty exceeded every expectation. Their attention to detail and market knowledge is unparalleled.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Oceanfront Property Seller",
      text: "Professional, responsive, and results-driven. They sold our beachfront property above asking price in just 3 weeks.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Investment Client",
      text: "Their expertise in luxury coastal properties helped us build an incredible investment portfolio.",
      rating: 5
    }
  ];

  // Counter animation
  useEffect(() => {
    const targets = { properties: 847, clients: 1250, years: 15 };
    const duration = 2000;
    const increment = { 
      properties: targets.properties / (duration / 50),
      clients: targets.clients / (duration / 50),
      years: targets.years / (duration / 50)
    };

    const timer = setInterval(() => {
      setCounters(prev => ({
        properties: Math.min(prev.properties + increment.properties, targets.properties),
        clients: Math.min(prev.clients + increment.clients, targets.clients),
        years: Math.min(prev.years + increment.years, targets.years)
      }));
    }, 50);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-slate-800" style={{fontFamily: 'Playfair Display, serif'}}>
                Sand N Sea Realty
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">Properties</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">Services</a>
              <a href="#" className="text-slate-700 hover:text-amber-600 transition-colors">Contact</a>
              <button className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
          }}
        ></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Where Luxury Meets the Coastline
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary oceanfront properties and luxury estates with Sand N Sea Realty. 
            Your gateway to premier coastal living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Our Listings
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-all">
              Contact an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Sand N Sea */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Why Choose Sand N Sea
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium real estate services and unmatched expertise in luxury coastal properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Luxury Expertise",
                description: "Specializing in high-end oceanfront properties and exclusive coastal estates with unparalleled market knowledge."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personal Service",
                description: "Dedicated agents providing white-glove service tailored to your unique luxury real estate needs."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Results",
                description: "Award-winning track record with over 847 luxury properties sold and countless satisfied clients."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Prime Locations",
                description: "Exclusive access to the most sought-after coastal communities and waterfront properties."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Counter Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                {Math.floor(counters.properties)}+
              </div>
              <h3 className="text-xl font-semibold mb-2">Properties Sold</h3>
              <p className="text-gray-300">Luxury homes and estates successfully sold to satisfied clients</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                {Math.floor(counters.clients)}+
              </div>
              <h3 className="text-xl font-semibold mb-2">Clients Served</h3>
              <p className="text-gray-300">Discriminating buyers and sellers who trust our expertise</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-bold text-amber-400 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                {Math.floor(counters.years)}+
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Excellence</h3>
              <p className="text-gray-300">Decades of experience in luxury coastal real estate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Hear from satisfied clients who experienced our exceptional service</p>
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed" style={{fontFamily: 'Playfair Display, serif'}}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="text-lg font-semibold text-slate-800">{testimonials[currentTestimonial].name}</div>
                <div className="text-amber-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Sand N Sea Realty
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your premier destination for luxury coastal real estate. Specializing in oceanfront properties and exclusive estates along America's most beautiful coastlines.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-amber-600 p-3 rounded-full hover:bg-amber-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Properties</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">info@sandnsearealty.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">123 Ocean Drive, Coastal City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2025 Sand N Sea Realty. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;