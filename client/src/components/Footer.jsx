import {Home, Users, Award, Phone, Mail, MapPin, Star, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    {/* Footer */}
          <footer className="bg-slate-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                    SandNSea Realty
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Your premier destination for luxury coastal real estate. Specializing in oceanfront properties and exclusive estates along mumbai's most beautiful places.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61573525333897" className="bg-[#d2ab67] p-3 rounded-full hover:bg-amber-700 transition-colors" target='blank'>
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/sandnsea.realty/" className="bg-[#d2ab67] p-3 rounded-full hover:bg-amber-700 transition-colors" target='blank'>
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/company/sand-sea-realty-venturellp/?originalSubdomain=in" className="bg-[#d2ab67] p-3 rounded-full hover:bg-amber-700 transition-colors" target='blank'>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://youtube.com/@sandnsearealty2924?si=CYjQpNL8naroJ184" className="bg-[#d2ab67] p-3 rounded-full hover:bg-amber-700 transition-colors" target='blank'>
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/Sandnsea2924?t=Vdpvh_sDynxOk5mY4NCN5w&s=08" className="bg-[#d2ab67] p-3 rounded-full hover:bg-amber-700 transition-colors" target='blank'>
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link to="/aboutus" className="text-gray-300 hover:text-[#d2ab67] transition-colors">About Us</Link></li>
                    <li><Link to="/properties" className="text-gray-300 hover:text-[#d2ab67] transition-colors">Properties</Link></li>
                    <li><Link to="/clients" className="text-gray-300 hover:text-[#d2ab67] transition-colors">Our Clients</Link></li>
                    <li><Link to="/contact" className="text-gray-300 hover:text-[#d2ab67] transition-colors">Contact Us</Link></li>
                      <li><Link to="/tos" className="text-gray-300 hover:text-[#d2ab67] transition-colors">Terms & Service</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#d2ab67]" />
                      <span className="text-gray-300">9820233133 
</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#d2ab67]" />
                      <span className="text-gray-300">http://sandnsearealty.com/</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#d2ab67]" />
                      <span className="text-gray-300">8th Floor, Office Number -  812, 86 Central Ghatkopar West, Mumbai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400">© 2025 Sand N Sea Realty. All rights reserved. Built by <a href="https://bowlpulp.com" className="text-[#d2ab67] hover:underline">BowlPulp.</a></p>
              </div>
            </div>
          </footer>
    </>
  )
}

export default Footer