import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, Star } from 'lucide-react';

const PropertiesPage = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [viewedProperties, setViewedProperties] = useState(new Set());
  const featureRefs = useRef([]);

  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Malibu, California',
      size: '4,500 sq ft',
      price: '$8,500,000',
      bedrooms: 5,
      bathrooms: 6,
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'The Hamptons, New York',
      size: '6,200 sq ft',
      price: '$12,750,000',
      bedrooms: 6,
      bathrooms: 7,
      rating: 5.0,
      featured: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Miami Beach, Florida',
      size: '3,800 sq ft',
      price: '$6,200,000',
      bedrooms: 4,
      bathrooms: 5,
      rating: 4.8,
      featured: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Carmel-by-the-Sea, California',
      size: '5,100 sq ft',
      price: '$9,850,000',
      bedrooms: 5,
      bathrooms: 6,
      rating: 4.7,
      featured: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Nantucket, Massachusetts',
      size: '4,200 sq ft',
      price: '$7,300,000',
      bedrooms: 4,
      bathrooms: 5,
      rating: 4.6,
      featured: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Big Sur, California',
      size: '3,600 sq ft',
      price: '$5,900,000',
      bedrooms: 3,
      bathrooms: 4,
      rating: 4.9,
      featured: false
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Newport, Rhode Island',
      size: '7,800 sq ft',
      price: '$15,200,000',
      bedrooms: 7,
      bathrooms: 8,
      rating: 5.0,
      featured: true
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Martha\'s Vineyard, Massachusetts',
      size: '5,500 sq ft',
      price: '$11,400,000',
      bedrooms: 6,
      bathrooms: 7,
      rating: 4.8,
      featured: false
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Laguna Beach, California',
      size: '4,100 sq ft',
      price: '$7,900,000',
      bedrooms: 4,
      bathrooms: 5,
      rating: 4.7,
      featured: false
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Kiawah Island, South Carolina',
      size: '6,800 sq ft',
      price: '$13,500,000',
      bedrooms: 6,
      bathrooms: 8,
      rating: 4.9,
      featured: true
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Block Island, Rhode Island',
      size: '3,200 sq ft',
      price: '$4,850,000',
      bedrooms: 3,
      bathrooms: 4,
      rating: 4.5,
      featured: false
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      location: 'Outer Banks, North Carolina',
      size: '5,900 sq ft',
      price: '$10,200,000',
      bedrooms: 5,
      bathrooms: 7,
      rating: 4.8,
      featured: false
    }
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
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-semibold">
              View Investment Guide
            </button>
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
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {property.featured && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="flex gap-2 ml-auto">
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        favorites.has(property.id) 
                          ? 'bg-red-500 text-white shadow-lg' 
                          : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.has(property.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => viewProperty(property.id)}
                      className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
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
                    onClick={() => viewProperty(property.id)}
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    View Details
                  </button>
                  <button className="w-full border-2 border-slate-800 text-slate-800 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-semibold">
                    Talk to Advisor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default PropertiesPage;