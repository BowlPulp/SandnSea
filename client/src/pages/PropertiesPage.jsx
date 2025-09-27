import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import PropertyPrompt component (you'll need to adjust the path)


const PropertiesPage = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [viewedProperties, setViewedProperties] = useState(new Set());
  const [selectedMainLocation, setSelectedMainLocation] = useState('Mumbai');
  const [selectedSubLocation, setSelectedSubLocation] = useState('Western');
  const featureRefs = useRef([]);

  // All properties data with location categories
  const allProperties = {
    Mumbai: {
      Western: [
        {
          id: 1,
          image: 'aboutusproperties/LodhaAltus.jpg',
          location: 'Lodha Altus - Borivali West',
          size: '3,4 BHK',
          price: '₹4.0 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.9,
          featured: true
        },
        {
          id: 18,
          image: 'aboutusproperties/GodrejReserve.webp',
          location: 'Godrej Reserve - Kandivali East',
          size: '2,3,4 BHK',
          price: '₹4.0 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.9,
          featured: true
        },
        {
          id: 19,
          image: 'properties/adani.jpeg',
          location: 'Adani Linkbay Residences - Western Suburbs',
          size: '2,3,4 BHK',
          price: '₹3.5 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.7,
          featured: false
        },
        {
          id: 20,
          image: 'aboutusproperties/LodhaAcenza.jpg',
          location: 'Lodha Ascenza - Wadala',
          size: '3,4 BHK',
          price: '₹8.0 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 5.0,
          featured: true
        },
        {
          id: 21,
          image: 'properties/godrejskyshore.jpg',
          location: 'Godrej Skyshore - Western Suburbs',
          size: '2,3,4 BHK',
          price: '₹4.5 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.8,
          featured: false
        }
      ],
      Central: [
        {
          id: 1,
          image: 'aboutusproperties/runwalavenue.jpg',
          location: 'Runwal Avenue - Kanjurmang WEST',
          size: '1,2,3 BHK',
          price: '₹1.4 CR',
          bedrooms: '2+',
          bathrooms: '2+',
          rating: 4.5,
          featured: true
        },
        {
          id: 22,
          image: 'properties/Prestige.png',
          location: 'Prestige City - Central Suburbs',
          size: '2,3,4 BHK',
          price: '₹3.8 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.8,
          featured: true
        },
        {
          id: 23,
          image: 'properties/Piramal.png',
          location: 'Piramal Revanta - Central Suburbs',
          size: '2,3,4 BHK',
          price: '₹4.2 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.7,
          featured: false
        },
        {
          id: 24,
          image: 'properties/Neelam.png',
          location: 'Neelam Senroof - Central Suburbs',
          size: '3,4 BHK',
          price: '₹4.8 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.6,
          featured: false
        },
        {
          id: 25,
          image: 'properties/Raheja.png',
          location: 'Raheja Antares - Central Suburbs',
          size: '3,4,5 BHK',
          price: '₹5.5 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.9,
          featured: true
        },
        {
          id: 26,
          image: 'properties/L&T.png',
          location: 'Lnt Elixir - Central Suburbs',
          size: '2,3,4 BHK',
          price: '₹4.6 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.7,
          featured: false
        },
      ],
      'South Mumbai': [
        // Renamed from 'Luxury Towers' to match your list
        {
          id: 28,
          image: 'aboutusproperties/LodhaDivino.jpg',
          location: 'Lodha Divino - South Mumbai',
          size: '3,4 BHK',
          price: '₹8.5 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 5.0,
          featured: true
        },
        {
          id: 3,
          image: 'aboutusproperties/DLH.webp',
          location: 'DLH Signature - Bandra West',
          size: '3,4 BHK',
          price: '₹4.0 CR',
          bedrooms: '3+',
          bathrooms: '3+',
          rating: 4.9,
          featured: false
        },
        {
          id: 30,
          image: 'properties/LnTGateway.jpg',
          location: 'Lnt Gateway - South Mumbai',
          size: '3,4 BHK',
          price: '₹9.2 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.8,
          featured: true
        },
        {
          id: 31,
          image: 'properties/lntisland.jpg',
          location: 'Island Clove Lnt - South Mumbai',
          size: '4,5 BHK',
          price: '₹11.0 CR',
          bedrooms: '4+',
          bathrooms: '5+',
          rating: 4.9,
          featured: true
        },
        {
          id: 32,
          image: 'properties/godrejhorizon.jpg',
          location: 'Godrej Horizon - South Mumbai',
          size: '3,4,5 BHK',
          price: '₹8.8 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.8,
          featured: false
        }
      ],
      
    },
    Outside: {
      Dubai: [
        {
          id: 10,
          image: 'properties/dubai.jpg',
          location: 'Oberoi Realty - Pune West',
          size: '2,3,4 BHK',
          price: '₹2.5 CR',
          bedrooms: '2+',
          bathrooms: '2+',
          rating: 4.6,
          featured: true
        },
      ],
      Pune: [
        {
          id: 12,
          image: 'properties/pune.jpg',
          location: 'DLF Privana - Gurgaon',
          size: '3,4,5 BHK',
          price: '₹5.5 CR',
          bedrooms: '3+',
          bathrooms: '4+',
          rating: 4.9,
          featured: true
        },
      ],
      'Bangalore': [
        {
          id: 35,
          image: 'properties/bangalore.jpg',
          location: 'Garden City Heights - Pune',
          size: '2,3,4 BHK',
          price: '₹2.2 CR',
          bedrooms: '2+',
          bathrooms: '3+',
          rating: 4.6,
          featured: true
        }
      ]
    }
  };

  // Get current properties based on selection
  const getCurrentProperties = () => {
    return allProperties[selectedMainLocation]?.[selectedSubLocation] || [];
  };

  // Get sub-location buttons for current main location
  const getSubLocationButtons = () => {
    return Object.keys(allProperties[selectedMainLocation] || {});
  };

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

  const handleMainLocationChange = (location) => {
    setSelectedMainLocation(location);
    // Set first available sub-location when main location changes
    const subLocations = Object.keys(allProperties[location] || {});
    setSelectedSubLocation(subLocations[0] || 'Western');
  };

  const currentProperties = getCurrentProperties();
  const totalProperties = Object.values(allProperties).reduce((total, mainLocation) => {
    return total + Object.values(mainLocation).reduce((subTotal, properties) => {
      return subTotal + properties.length;
    }, 0);
  }, 0);

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
  }, [currentProperties]);

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
              Discover {totalProperties} exceptional coastal estates and oceanfront properties, 
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
            and world-class amenities in the most coveted locations across India's prime cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='/contact' className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Schedule Private Tour
            </Link>
          </div>
        </div>
      </div>

      {/* Location Filter Buttons */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Main Location Buttons */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Choose Location</h3>
          <div className="flex justify-center gap-4 mb-8">
            {Object.keys(allProperties).map((location) => (
              <button
                key={location}
                onClick={() => handleMainLocationChange(location)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  selectedMainLocation === location
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white'
                    : 'bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-400'
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Location Buttons */}
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-slate-700 mb-4">
            {selectedMainLocation} Areas
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {getSubLocationButtons().map((subLocation) => (
              <button
                key={subLocation}
                onClick={() => setSelectedSubLocation(subLocation)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                  selectedSubLocation === subLocation
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {subLocation}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Count */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Showing {currentProperties.length} properties in {selectedMainLocation} - {selectedSubLocation}
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {currentProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {currentProperties.map((property, index) => (
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
                      {/* You can uncomment these if you want the favorite and view buttons */}
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
                    <Link to='/contact'
                      className="w-full border-2 border-slate-800 text-slate-800 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 font-semibold" 
                     
                    >
                      Talk to Advisor
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">No properties available in this area</p>
            <p className="text-gray-400 mt-2">Please select a different location</p>
          </div>
        )}
      </div>

      {/* PropertyPrompt component can be added here when needed */}
      {/* <PropertyPrompt propertyId={selectedPropertyId} /> */}
    </div>
  );
};

export default PropertiesPage;