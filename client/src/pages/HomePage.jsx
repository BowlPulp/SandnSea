import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, Star } from "lucide-react";
import { gsap } from "gsap";
import StackedCardTestimonials from "../components/StackedCardTestimonials";
import BrandMarquee from "../components/BrandMarquee";
import { Link } from "react-router-dom";
import PropertyPrompt from "../components/PropertyPrompt";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const featureRefs = useRef([]);
  const counterRefs = useRef([]);
  const testimonialRef = useRef(null);

  // Hero background images
  const heroImages = [
    { url: "homepageproperties/Morning.webp", alt: "Morning View" },
    { url: "homepageproperties/Sunrise.jpg", alt: "Sunrise View" },
    { url: "homepageproperties/Sunset.jpg", alt: "Sunset View" },
    { url: "homepageproperties/Night.jpg", alt: "Night View" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Virag Mishra",
      role: "Self",
      text: "Found my dream home with zero stress. Truly grateful!",
      rating: 5,
    },
    {
      name: "Devesh Mathur",
      role: "COO - HSBC Bangladesh",
      text: "Professional, reliable, and efficient. Excellent!",
      rating: 5,
    },
    {
      name: "Akhil Kedia",
      role: "Executive Director - JP Morgan",
      text: "Quick and smooth process!",
      rating: 5,
    },
    {
      name: "Dr. Roopesh Pandey",
      role: "Cardiologist - Jaslok Hospital",
      text: "Hassle-free despite my busy schedule.",
      rating: 5,
    },
    {
      name: "Sujata Kunder",
      role: "Custom Officer",
      text: "Loved the honesty and found exactly what I wanted!",
      rating: 5,
    },
  ];

  // Auto change hero image
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-open PropertyPrompt once after 3s if not dismissed today
  useEffect(() => {
    const dismissed = localStorage.getItem("propertyPromptDismissed");
    const today = new Date().toDateString();

    if (dismissed !== today) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/40 z-10"></div>

        {/* Hero Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${image.url}')` }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          ref={heroRef}
          className="relative z-20 text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl mb-6 font-cormant font-extrabold">
            Where Luxury Meets the Coastline
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover extraordinary oceanfront properties and luxury estates with
            Sand N Sea Realty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-[#d2ab67] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Our Listings <ChevronRight className="w-5 h-5" />
            </Link>

            {/* Contact Button */}
            <button
              onClick={() => setShowPrompt(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800"
            >
              Contact an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <BrandMarquee />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from satisfied clients who experienced our exceptional
              service
            </p>
          </div>
          <div className="relative">
            <div
              ref={testimonialRef}
              className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-[#d2ab67] fill-current"
                    />
                  )
                )}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="text-lg font-semibold text-slate-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-[#d2ab67]">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial
                      ? "bg-[#d2ab67]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PropertyPrompt modal */}
      <PropertyPrompt open={showPrompt} onClose={() => setShowPrompt(false)} />
    </div>
  );
};

export default HomePage;
