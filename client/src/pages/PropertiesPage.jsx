import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, Star, X, Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

// Modified ContactFormPopup to accept external props
const ContactFormPopup = ({ isOpen, onClose, propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData, 'Property ID:', propertyId);
    
    // Reset form and close popup
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
    onClose();
    
    // Show success message (you can customize this)
    alert('Thank you! Your message has been sent successfully.');
  };

  const closePopup = () => {
    onClose();
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            Contact Our Advisor
          </h2>
          <button
            onClick={closePopup}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-1" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-1" />
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Tell us about your interest in this property..."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={closePopup}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

const PropertiesPage = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [viewedProperties, setViewedProperties] = useState(new Set());
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const featureRefs = useRef([]);

  const properties = [
    {
      id: 1,
      image: 'aboutusproperties/runwalavenue.jpg',
      location: 'Runwal Avenue - Kanjurmang EAST',
      size: '1,2,3 BHK',
      price: '₹14,000,000',
      bedrooms: '2+',
      bathrooms: '2+',
      rating: 4.5,
      featured: true
    },
    {
      id: 2,
      image: 'aboutusproperties/LodhaDivino.jpg',
      location: 'Lodha Divino - Matunga',
      size: '3,4 BHK',
      price: '₹67,000,000',
      bedrooms: '3+',
      bathrooms: '3+',
      rating: 5.0,
      featured: true
    },
    {
      id: 3,
      image: 'aboutusproperties/LodhaAcenza.jpg',
      location: 'Lodha Ascenza - Andheri East ',
      size: '3,4 BHK',
      price: '₹80,000,000',
      bedrooms: '3+',
      bathrooms: '4+',
      rating: 5.0,
      featured: false
    },
    {
      id: 4,
      image: 'aboutusproperties/GodrejReserve.webp',
      location: 'Godrej Reserve - Kandivali East',
      size: '2,3,4 BHK',
      price: '₹40,000,000',
      bedrooms: '2+',
      bathrooms: '3+',
      rating: 4.9,
      featured: true
    },
    {
      id: 5,
      image: 'aboutusproperties/LodhaAltus.jpg',
      location: 'Lodha Altus - Borivali West',
      size: '3,4 BHK',
      price: '₹40,000,000',
      bedrooms: '3+',
      bathrooms: '4+',
      rating: 4.9,
      featured: false
    },
    {
      id: 6,
      image: 'aboutusproperties/DLH.webp',
      location: 'DLH Signature - Bandra West',
      size: '3,4 BHK',
      price: '₹40,000,000',
      bedrooms: '3+',
      bathrooms: '3+',
      rating: 4.9,
      featured: false
    },
  ];

  const toggleFavorite = (propertyId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavorites(newFavorites);
  };

  const viewProperty = (propertyId) => {
    setViewedProperties(prev => new Set([...prev, propertyId]));
  };

  const handleContactForm = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPropertyId(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.transform = 'translateY(30px)';
        ref.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-400 via-gray-800 to-black shadow-sm border-b mt-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Luxury Properties
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover {properties.length} exceptional coastal estates and oceanfront properties, 
              each one a masterpiece of luxury living and architectural excellence
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Curated Collection of Premier Estates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From breathtaking oceanfront villas to secluded mountain retreats, each property in our portfolio 
            represents the pinnacle of luxury living. Experience unparalleled elegance, stunning architecture, 
            and world-class amenities in the most coveted locations across America's coastlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Schedule Private Tour
            </button>
            {/* <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-semibold">
              View Investment Guide
            </button> */}
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                Badges
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {property.featured && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="flex gap-2 ml-auto">
                    {/* <button
                      onClick={() => toggleFavorite(property.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        favorites.has(property.id) 
                          ? 'bg-red-500 text-white shadow-lg' 
                          : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(property.id) ? 'fill-current' : ''}`} />
                    </button> */}
                    {/* <button
                      onClick={() => viewProperty(property.id)}
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-gray-800">{property.rating}</span>
                </div>

                {/* Viewed indicator */}
                {viewedProperties.has(property.id) && (
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white p-1 rounded-full">
                    <Eye className="w-3 h-3" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {property.price}
                </h3>
                
                <div className="grid grid-cols-3 gap-3 text-gray-600 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-blue-500" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-blue-500" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4 text-blue-500" />
                    <span className="text-xs">{property.size}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    className="w-full border-2 border-slate-800 text-slate-800 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-semibold" 
                    onClick={() => handleContactForm(property.id)}
                  >
                    Talk to Advisor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Popup */}
      <ContactFormPopup 
        isOpen={showPopup} 
        onClose={closePopup} 
        propertyId={selectedPropertyId}
      />
    </div>
  );
};

export default PropertiesPage;