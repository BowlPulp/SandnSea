import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Home, TrendingUp, MapPin, Star, Calendar, Target, Heart, Shield, User } from 'lucide-react';
import BrandMarquee from '../components/BrandMarquee';

const AboutUsPage = () => {
  const [counters, setCounters] = useState({ 
    properties: 0, 
    clients: 0, 
    years: 0, 
    awards: 0 
  });

  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  // Counter animation
  useEffect(() => {
    const targets = { properties: 847, clients: 1250, years: 15, awards: 12 };
    const duration = 2500;
    const increment = { 
      properties: targets.properties / (duration / 50),
      clients: targets.clients / (duration / 50),
      years: targets.years / (duration / 50),
      awards: targets.awards / (duration / 50)
    };

    const timer = setInterval(() => {
      setCounters(prev => ({
        properties: Math.min(prev.properties + increment.properties, targets.properties),
        clients: Math.min(prev.clients + increment.clients, targets.clients),
        years: Math.min(prev.years + increment.years, targets.years),
        awards: Math.min(prev.awards + increment.awards, targets.awards)
      }));
    }, 50);

    setTimeout(() => clearInterval(timer), duration);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Custom SVG Components
  const VisionSVG = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <defs>
        <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#visionGrad)" strokeWidth="3" className="animate-pulse"/>
      <circle cx="50" cy="50" r="30" fill="url(#visionGrad)" opacity="0.2"/>
      <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="50" r="6" fill="white"/>
    </svg>
  );

  const MissionSVG = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <defs>
        <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M50 10 L70 30 L70 50 L50 70 L30 50 L30 30 Z" fill="url(#missionGrad)" className="animate-pulse"/>
      <path d="M40 35 L45 45 L60 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M40 50 L60 50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 60 L55 60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  const ValuesSVG = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <defs>
        <linearGradient id="valuesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <polygon points="50,15 61,35 85,35 67,50 73,75 50,60 27,75 33,50 15,35 39,35" 
               fill="url(#valuesGrad)" className="animate-pulse"/>
      <circle cx="50" cy="45" r="8" fill="white" opacity="0.9"/>
      <path d="M46 42 L49 47 L54 40" stroke="#d2ab67" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );

  const IntegritySVG = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <defs>
        <linearGradient id="integrityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="60" height="50" rx="5" fill="url(#integrityGrad)"/>
      <rect x="35" y="20" width="30" height="20" rx="3" fill="none" stroke="url(#integrityGrad)" strokeWidth="3"/>
      <circle cx="40" cy="50" r="3" fill="white"/>
      <rect x="50" y="45" width="20" height="8" rx="2" fill="white"/>
    </svg>
  );

  const ClientCentricSVG = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <defs>
        <linearGradient id="clientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <path d="M50 20 C30 20 20 35 20 50 C20 65 30 80 50 80 C70 80 80 65 80 50 C80 35 70 20 50 20 Z" 
            fill="url(#clientGrad)"/>
      <circle cx="40" cy="40" r="4" fill="white"/>
      <circle cx="60" cy="40" r="4" fill="white"/>
      <path d="M35 60 Q50 70 65 60" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  );

  const ExcellenceSVG = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <defs>
        <linearGradient id="excellenceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="30" fill="url(#excellenceGrad)"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="50" cy="50" r="10" fill="white"/>
      <path d="M50 30 L50 40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M70 50 L60 50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 70 L50 60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M30 50 L40 50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );

  const RelationshipsSVG = () => (
    <svg viewBox="0 0 100 100" className="w-10 h-10">
      <defs>
        <linearGradient id="relationshipsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#d2ab67', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#b8956a', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <circle cx="35" cy="40" r="15" fill="url(#relationshipsGrad)"/>
      <circle cx="65" cy="40" r="15" fill="url(#relationshipsGrad)"/>
      <path d="M35 55 Q50 65 65 55" stroke="url(#relationshipsGrad)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <circle cx="30" cy="35" r="3" fill="white"/>
      <circle cx="40" cy="35" r="3" fill="white"/>
      <circle cx="60" cy="35" r="3" fill="white"/>
      <circle cx="70" cy="35" r="3" fill="white"/>
      <path d="M30 45 Q35 50 40 45" stroke="white" strokeWidth="2" fill="none"/>
      <path d="M60 45 Q65 50 70 45" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  );

  const achievements = [
    {
      year: "2024",
      title: "Top Real Estate Agency",
      description: "Ranked among the leading real estate agencies with exceptional client satisfaction"
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Established strong market presence with comprehensive property solutions"
    },
    {
      year: "2022",
      title: "Client Excellence Award",
      description: "Recognized for outstanding customer service and personalized approach"
    },
    {
      year: "2021",
      title: "Trusted Partner Status",
      description: "Became the go-to agency for residential and commercial property needs"
    }
  ];

  const values = [
    {
      icon: <IntegritySVG />,
      title: "Integrity",
      description: "We conduct business with unwavering honesty and transparency, building trust through every interaction."
    },
    {
      icon: <ClientCentricSVG />,
      title: "Client-Centric",
      description: "We prioritize your needs and work tirelessly to deliver results that exceed expectations."
    },
    {
      icon: <ExcellenceSVG />,
      title: "Excellence",
      description: "We leverage our expertise and market insights to ensure our clients achieve their goals."
    },
    {
      icon: <RelationshipsSVG />,
      title: "Relationships",
      description: "We believe real estate is about building lasting relationships, not just transactions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white" 
               id="foundation" 
               ref={el => sectionRefs.current.foundation = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('foundation') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide every interaction and decision we make.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Vision */}
            <div className={`text-center transition-all duration-1000 delay-200 ${
              visibleSections.has('foundation') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-amber-100 to-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <VisionSVG />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Sand and Sea Ventures LLP , “Realty to Reality” is our creed. We boldly transform dreams into enduring legacies—building spaces where communities grow, futures are forged, and trust stands unshaken. We don’t just follow the market; we shape it with vision, integrity, and purpose.
              </p>
            </div>

            {/* Mission */}
            <div className={`text-center transition-all duration-1000 delay-400 ${
              visibleSections.has('foundation') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-amber-100 to-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <MissionSVG />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Sand & Sea, our mission is to turn real estate aspirations into lasting realities. We deliver
                personalized, strategic, and innovative property solutions that reflect each client’s unique
                vision—whether by the coast, in the city, or anywhere in between. With deep industry
                expertise and a commitment to integrity, we aim to simplify and elevate every step of the real
                estate journey.
              </p>
            </div>

            {/* Values */}
            <div className={`text-center transition-all duration-1000 delay-600 ${
              visibleSections.has('foundation') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-amber-100 to-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <ValuesSVG />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Our Values
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, transparency, and client-centricity form the cornerstone of our business. We believe 
                in honest communication, ethical practices, and delivering personalized solutions that align 
                with each client's unique goals and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach & Values */}
     <BrandMarquee/>

      {/* Leadership Team */}
 <section className="py-20 bg-slate-50" 
               id="leadership" 
               ref={el => sectionRefs.current.leadership = el}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${
            visibleSections.has('leadership') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center bg-[#d2ab67]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#d2ab67] font-semibold text-sm tracking-wider uppercase">Leadership</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of expertise across real estate, 
              finance, and business development to deliver exceptional solutions for our clients.
            </p>
          </div>

         <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Founder - Danesh Singh */}
            <div className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-500 ${
              visibleSections.has('leadership') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`} style={{transitionDelay: '200ms'}}>
              <div className="text-center mb-6">
                <img 
                  src="Founder.jpeg" 
                  alt="Danesh Singh - Founder & CEO"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <div className="bg-[#d2ab67] text-white px-4 py-1 rounded-lg text-sm font-semibold inline-block">
                  Founder & CEO
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-slate-800 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                  Danesh Singh
                </h3>
                <div className="text-[#d2ab67] font-semibold text-base mb-4 italic">
                  "The best time to plant a tree was 20 years ago. The second-best time is now."
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p className="text-base font-medium text-slate-800">
                  Transforming vision into reality through strategic excellence and unwavering integrity.
                </p>
                
                <p>
                  With a Master's in Marketing and Sales plus published research from Business School, 
                  Danesh brings academic rigor to over a decade of hands-on real estate expertise.
                </p>
                
                <p>
                  His distinguished career spans industry leaders including <span className="font-semibold text-slate-800">Bennett & Coleman, L&T Realty, Adani Realty, Anarock, and Palladian Partners</span>—mastering 
                  every facet from sales and marketing to business development and digital innovation.
                </p>
                
                <p className="font-medium text-slate-800 border-l-3 border-[#d2ab67] pl-3 italic text-sm">
                  "Now launching this venture, I'm committed to delivering strategic, personalized, 
                  and seamless real estate solutions. From market insights to deal structuring, 
                  every approach is built on integrity, innovation, and excellence."
                </p>
              </div>
            </div>

            {/* Founder - Sapna V Singh */}
            <div className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-500 ${
              visibleSections.has('leadership') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{transitionDelay: '300ms'}}>
              <div className="text-center mb-6">
                <img 
                  src="CoFounder.png" 
                  alt="Sapna V Singh - Founder"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <div className="bg-[#d2ab67] text-white px-4 py-1 rounded-lg text-sm font-semibold inline-block">
                  Founder
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-slate-800 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                  Sapna V Singh
                </h3>
                <div className="text-[#d2ab67] font-semibold text-base mb-4 italic">
                  "Creativity and strategic vision drive transformative success."
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p className="text-base font-medium text-slate-800">
                  Bridging creativity and business acumen through entrepreneurial excellence and innovative vision.
                </p>
                
                <p>
                  With a Bachelor's in Sanskrit and Master's in Fashion Design from a leading Mumbai university, 
                  Sapna brings unique creative perspective to real estate administration.
                </p>
                
                <p>
                  Her entrepreneurial journey began with founding <span className="font-semibold text-slate-800">VIMEE</span>, a fashion brand known for elegance 
                  and innovation, before transitioning into real estate where she applies sharp business insight 
                  to navigate dynamic market conditions.
                </p>
                
                <p className="font-medium text-slate-800 border-l-3 border-[#d2ab67] pl-3 italic text-sm">
                  "With a unique blend of artistic vision and strategic thinking, I continue making my mark 
                  across industries—bringing creative solutions and business excellence to every venture."
                </p>
              </div>
            </div>

            {/* Director */}
            <div className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-500 ${
              visibleSections.has('leadership') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`} style={{transitionDelay: '400ms'}}>
              <div className="text-center mb-6">
                <img 
                  src="Director.jpg" 
                  alt="Subhashchandra Singh - Director"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-4"
                />
                <div className="bg-slate-800 text-white px-4 py-1 rounded-lg text-sm font-semibold inline-block">
                  Director
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-slate-800 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                  Subhashchandra Singh
                </h3>
                <div className="text-slate-800 font-semibold text-base mb-4 italic">
                  "Success is born from dharma—acting with integrity and purpose."
                </div>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p className="text-base font-medium text-slate-800">
                  Guiding with wisdom earned through 35 years of cross-industry leadership excellence.
                </p>
                
                <p>
                  At Sand and Sea Ventures LLP, ethical principles guide every transaction, ensuring 
                  your trust is honored through dharma-driven business practices.
                </p>
                
                <p>
                  His remarkable journey spans <span className="font-semibold text-slate-800">Pharmaceuticals, Banking, and Specialty Chemicals</span> with prestigious 
                  organizations including <span className="font-semibold text-slate-800">TTK, Pfizer, Bio-Med, Central Bank of India, and Bank of Baroda</span>—consistently 
                  driving strategic growth and business excellence.
                </p>
                
                <p className="font-medium text-slate-800 border-l-3 border-slate-800 pl-3 italic text-sm">
                  "In this exciting post-retirement chapter, my mission is mentoring dynamic professionals—sharing 
                  key insights, foundational principles, and hands-on expertise. With deep industry knowledge 
                  and strategic vision, I'm committed to guiding our firm toward unprecedented success."
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white" 
               id="why-choose" 
               ref={el => sectionRefs.current['why-choose'] = el}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('why-choose') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the real estate industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Experience & Expertise",
                description: "With years of experience in the real estate industry, we have the knowledge and skills to handle even the most complex deals."
              },
              {
                icon: <MapPin className="w-8 h-8 text-white" />,
                title: "Local Market Knowledge",
                description: "Our deep understanding of local market trends allows us to offer accurate and timely advice to our clients."
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: "Customer First",
                description: "We prioritize your needs and work tirelessly to deliver results that exceed expectations in every transaction."
              }
            ].map((item, index) => (
              <div key={index} className={`bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm text-center hover:bg-slate-700/70 transition-all duration-500 hover:scale-105 group ${
                visibleSections.has('why-choose') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`} style={{transitionDelay: `${200 + index * 200}ms`}}>
                <div className="bg-[#d2ab67] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d2ab67] transition-colors duration-300" style={{fontFamily: 'Playfair Display, serif'}}>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-50" 
               id="cta" 
               ref={el => sectionRefs.current.cta = el}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          visibleSections.has('cta') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Connect with Us
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's work together to make your real estate aspirations a reality. Connect with us to discuss 
            how we can assist you in your next real estate venture.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-200 ${
            visibleSections.has('cta') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
               <a href="/properties" className="bg-[#d2ab67] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 hover:shadow-lg inline-block">
              View Our Properties
            </a>
            <a href='/contact' className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 hover:text-white transition-all hover:scale-105 hover:shadow-lg">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;