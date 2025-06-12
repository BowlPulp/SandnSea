import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';

const ClientsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Virag Mishra",
      company: "Singer",
      role: "Self",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Found my dream home with zero stress. You understood exactly what I needed—truly grateful!",
      rating: 5,
      property: "Downtown Commercial Complex"
    },
    {
      name: "Devesh Mathur",
      company: "HSBC Bangladesh",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Professional, reliable, and efficient. The whole process was handled with excellence.",
      rating: 5,
      property: "Modern Office Space"
    },
    {
      name: "Akhil Kedia",
      company: "JP Morgan",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Great experience—your insights and approach made everything quick and smooth. ",
      rating: 5,
      property: "Luxury Residential Portfolio"
    },
    {
      name: "Dr. Roopesh Pandey",
      company: "Jaslok Hospital",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Appreciated the hassle-free process. You made it easy despite my busy schedule.",
      rating: 5,
      property: "Retail Shopping Center"
    },
      {
      name: "Sujata Kunder",
      company: "Custom Officer",
      role: "-",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Loved the personal attention and honesty. Found exactly what I was looking for!",
      rating: 5,
      property: "Retail Shopping Center"
    }
  ];

  const clients = [
    { name: "TechCorp Solutions", logo: "TC" },
    { name: "Global Industries", logo: "GI" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Prime Investments", logo: "PI" },
    { name: "Future Holdings", logo: "FH" },
    { name: "Metro Development", logo: "MD" },
    { name: "Skyline Properties", logo: "SP" },
    { name: "Urban Dynamics", logo: "UD" },
    { name: "Elite Ventures", logo: "EV" },
    { name: "Nexus Group", logo: "NG" },
    { name: "Catalyst Partners", logo: "CP" },
    { name: "Quantum Real Estate", logo: "QR" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Properties Sold" },
    { number: "$2.5B+", label: "Total Value Transacted" },
    { number: "15+", label: "Years Experience" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
        <>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-10%  from-blue-950 via-[#d2ab67] to-blue-950 mt-16">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Clients
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders and growing businesses alike. Discover why hundreds of clients 
              choose us for their property needs.
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div> */}
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#d2ab67] to-yellow-600 text-white rounded-2xl p-6 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-yellow-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-slate-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real clients who have achieved success with our property services
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-yellow-500 opacity-20" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-yellow-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-yellow-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-500">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Project:</div>
                  <div className="font-semibold text-gray-700">
                    {testimonials[currentTestimonial].property}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-yellow-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-yellow-600 group-hover:text-yellow-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-yellow-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-yellow-600 group-hover:text-yellow-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-yellow-600 w-8'
                      : 'bg-yellow-200 hover:bg-yellow-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <BrandMarquee/>

      {/* CTA Section */}
      {/* <div className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-800 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-yellow-100 text-xl mb-8 leading-relaxed">
            Let us help you achieve your property goals with our proven expertise and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
    </>
  );
};

export default ClientsPage;