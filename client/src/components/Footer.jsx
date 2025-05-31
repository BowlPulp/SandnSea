import {Home, Users, Award, Phone, Mail, MapPin, Star, Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer