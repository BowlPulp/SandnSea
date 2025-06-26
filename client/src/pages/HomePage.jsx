import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Home, Users, Award, MapPin, Star } from 'lucide-react';
import { gsap } from 'gsap'; // Import GSAP (install via `npm install gsap` or use CDN in your project)
import StackedCardTestimonials from '../components/StackedCardTestimonials';
import BrandMarquee from '../components/BrandMarquee';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [counters, setCounters] = useState({ properties: 0, clients: 0, years: 0 });

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const featureRefs = useRef([]);
  const counterRefs = useRef([]);
  const testimonialRef = useRef(null);
  
  // Hero background images
  const heroImages = [
    {
      url: 'homepageproperties/Morning.webp',
      alt: 'Morning View',
    },
    {
      url: 'homepageproperties/Sunrise.jpg',
      alt: 'Sunrise View',
    },
    {
      url: 'homepageproperties/Sunset.jpg',
      alt: 'Sunset View',
    },
    {
      url: 'homepageproperties/Night.jpg',
      alt: 'Night View',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'Luxury Home Buyer',
      text: 'Sand N Sea Realty exceeded every expectation. Their attention to detail and market knowledge is unparalleled.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Oceanfront Property Seller',
      text: 'Professional, responsive, and results-driven. They sold our beachfront property above asking price in just 3 weeks.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Investment Client',
      text: 'Their expertise in luxury coastal properties helped us build an incredible investment portfolio.',
      rating: 5,
    },
  ];

  // Hero image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Hero Animations
  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.querySelectorAll('h1, p, button'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // GSAP Feature Cards Animation
  useEffect(() => {
    featureRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  // GSAP Counter Animation
  useEffect(() => {
    const targets = { properties: 847, clients: 1250, years: 15 };
    counterRefs.current.forEach((el, index) => {
      if (el) {
        const key = ['properties', 'clients', 'years'][index];
        gsap.to(counters, {
          [key]: targets[key],
          duration: 2,
          ease: 'power1.out',
          onUpdate: () => {
            setCounters((prev) => ({
              ...prev,
              [key]: Math.floor(gsap.getProperty(counters, key)),
            }));
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    });
  }, []);

  // GSAP Testimonial Animation
  useEffect(() => {
    const testimonial = testimonialRef.current;
    if (testimonial) {
      gsap.fromTo(
        testimonial,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, [currentTestimonial]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/40 z-10"></div>

        {/* Image Carousel Container */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ease-in-out ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image.url}')`,
              }}
            />
          ))}
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-amber-500 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <div ref={heroRef} className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl mb-6 font-cormant font-extrabold">
            Where Luxury Meets the Coastline
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary oceanfront properties and luxury estates with Sand N Sea Realty. Your gateway to premier
            coastal living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties" className="bg-[#d2ab67] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Our Listings
              <ChevronRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800">
              Contact an Agent
            </button>
          </div>
        </div>
      </section>
{/* Featured Properties */}
          <BrandMarquee/>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of luxury coastal properties and exclusive oceanfront estates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'properties/Prestige.png',
                location: 'Prestige City - Mulund West',
                size: '2,3,4 BHK',
                price: '₹3,000,000+',
                bedrooms: '2+',
                bathrooms: '2+'
              },
              {
                image: 'properties/Piramal.png',
                location: 'Piramal Revanta - Mulund West',
                size: '2,3 BHK',
                price: '₹3,280,000+',
                bedrooms: '2+',
                bathrooms: '2+'
              },
              {
                image: 'properties/Neelam.png',
                location: 'Neelam Senroof - Mulund East',
                size: '2,3 BHK',
                price: '₹2,50,000+',
               bedrooms: '2+',
                bathrooms: '2+'
              },
              {
                image: 'properties/Raheja.png',
                location: 'Raheja Antares',
                size: '3,4 BHK',
                price: '₹3,850,000+',
               bedrooms: '3+',
                bathrooms: '3+'
              },
              {
                image: 'properties/L&T.png',
                location: 'L&t Elixr 2 - Powai',
                size: '2,3 BHK',
                price: '₹3,280,000+',
                bedrooms: '2+',
                bathrooms: '2+'
              },
              {
                image: 'properties/Lodha.png',
                location: 'Lodha Divino - Matunga',
                size: '3,4 BHK',
                price: '₹6,700,000+',
                bedrooms: '3+',
                bathrooms: '3+'
              },
            ].map((property, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.location}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{property.price}</h3>
                  <div className="flex justify-between text-gray-600 text-sm mb-4">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.size}</span>
                  </div>
                  <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 font-semibold">
                    Talk to our advisor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Counter Section */}
      {/* <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: Math.floor(counters.properties), label: 'Properties Sold', desc: 'Luxury homes and estates successfully sold to satisfied clients' },
              { value: Math.floor(counters.clients), label: 'Clients Served', desc: 'Discriminating buyers and sellers who trust our expertise' },
              { value: Math.floor(counters.years), label: 'Years of Excellence', desc: 'Decades of experience in luxury coastal real estate' },
            ].map((counter, index) => (
              <div
                key={index}
                ref={(el) => (counterRefs.current[index] = el)}
                className="p-8"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#d2ab67] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {counter.value}+
                </div>
                <h3 className="text-xl font-semibold mb-2">{counter.label}</h3>
                <p className="text-gray-300">{counter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Hear from satisfied clients who experienced our exceptional service</p>
          </div>
          <div className="relative">
            <div
              ref={testimonialRef}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#d2ab67] fill-current" />
                ))}
              </div>
              <blockquote
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="text-lg font-semibold text-slate-800">{testimonials[currentTestimonial].name}</div>
                <div className="text-[#d2ab67]">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#d2ab67]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for StackedCardTestimonials */}
      {/* <StackedCardTestimonials /> */}
    </div>
  );
};

export default HomePage;