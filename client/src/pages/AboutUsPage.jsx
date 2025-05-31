import React, { useState, useEffect } from 'react';
import { Award, Users, Home, TrendingUp, MapPin, Star, Calendar, Target, Heart, Shield, User } from 'lucide-react';

const AboutUsPage = () => {
  const [counters, setCounters] = useState({ 
    properties: 0, 
    clients: 0, 
    years: 0, 
    awards: 0 
  });

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

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      title: "Founder & CEO",
      experience: "18 years",
      specialty: "Luxury Coastal Properties",
      description: "Michael founded Sand N Sea Realty with a vision to redefine luxury real estate along America's coastlines.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Thompson",
      title: "Senior Vice President",
      experience: "14 years",
      specialty: "Investment Properties",
      description: "Sarah leads our investment division, helping clients build generational wealth through strategic property acquisitions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c915f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      title: "Director of Sales",
      experience: "12 years",
      specialty: "Oceanfront Estates",
      description: "David specializes in ultra-luxury oceanfront properties, with an unmatched knowledge of coastal real estate markets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Top Luxury Real Estate Agency",
      description: "Ranked #1 in luxury coastal property sales nationwide"
    },
    {
      year: "2023",
      title: "$2.8 Billion in Sales Volume",
      description: "Record-breaking year with highest luxury property sales in company history"
    },
    {
      year: "2022",
      title: "Industry Excellence Award",
      description: "Recognized by National Association of Realtors for outstanding service"
    },
    {
      year: "2021",
      title: "Coastal Property Specialists",
      description: "Became the leading agency for oceanfront properties on the West Coast"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We conduct business with unwavering honesty and transparency, earning trust through every interaction."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Every decision we make is guided by what's best for our clients' long-term success and satisfaction."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We set the highest standards in luxury real estate, continuously exceeding expectations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "We build lasting relationships, viewing each client as a valued partner in their real estate journey."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, Sand N Sea Realty has been the trusted name in luxury coastal real estate, 
              helping discerning clients discover their perfect oceanfront sanctuary.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Properties Sold", value: Math.floor(counters.properties), suffix: "+" },
              { label: "Happy Clients", value: Math.floor(counters.clients), suffix: "+" },
              { label: "Years of Excellence", value: Math.floor(counters.years), suffix: "" },
              { label: "Industry Awards", value: Math.floor(counters.awards), suffix: "" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-amber-600 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Origin & Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Founded on a Vision of Excellence
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Sand N Sea Realty was born from a simple yet powerful vision: to create an unparalleled 
                  luxury real estate experience for clients seeking the finest coastal properties in America. 
                  Founded in 2010 by Michael Rodriguez, our agency emerged from a deep passion for oceanfront 
                  living and an unwavering commitment to exceptional service.
                </p>
                <p className="text-lg">
                  What started as a boutique firm specializing in a select few coastal communities has grown 
                  into the premier luxury real estate agency along the nation's most coveted coastlines. Our 
                  success stems from our intimate knowledge of coastal markets, our extensive network of 
                  high-net-worth clients, and our dedication to turning real estate dreams into reality.
                </p>
                <p className="text-lg">
                  Today, Sand N Sea Realty represents the pinnacle of luxury coastal real estate, with a 
                  portfolio that includes some of the most exclusive oceanfront estates, luxury condominiums, 
                  and investment properties in prime coastal locations across the United States.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-slate-100 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury coastal property" 
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are driven by a mission to provide unparalleled luxury real estate services while upholding 
              the values that define our character and guide our success.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-slate-800 text-white rounded-3xl p-12 mb-16 text-center">
            <h3 className="text-3xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Mission
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              "To be the definitive luxury coastal real estate agency, connecting discerning clients with 
              exceptional oceanfront properties while delivering an unmatched level of personalized service, 
              market expertise, and professional integrity that creates lasting relationships and transforms lives."
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead Sand N Sea Realty with passion, expertise, 
              and an unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="relative mb-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  {member.name}
                </h3>
                <div className="text-amber-600 font-semibold mb-2">{member.title}</div>
                <div className="text-sm text-gray-600 mb-4 font-medium">Specialty: {member.specialty}</div>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Milestones */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Achievements & Milestones
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey has been marked by significant achievements that reflect our commitment to 
              excellence and leadership in luxury coastal real estate.
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-amber-600 text-white font-bold text-2xl px-6 py-4 rounded-xl min-w-[120px] text-center">
                  {achievement.year}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Experience the Sand N Sea Realty difference. Let our team of luxury real estate experts 
            guide you to your perfect coastal property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105">
              View Our Properties
            </button>
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 hover:text-white transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Sand N Sea Realty
          </div>
          <p className="text-gray-400 mb-4">Where luxury meets the coastline</p>
          <p className="text-gray-500 text-sm">© 2025 Sand N Sea Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;